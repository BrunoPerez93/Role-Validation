export function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log('Requested Path:', pathname);

  if (pathname.startsWith('/protected')) {
    const token = req.cookies.get('auth_token');
    console.log('Token:', token);

    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    try {
      const user = verify(token, process.env.JWT_SECRET);
      console.log('User Role:', user.role);

      if (pathname.includes('/admin') && user.role !== 'Admin') {
        console.log('Redirecting to 403 page');
        return NextResponse.redirect(new URL('/error/403', req.url));
      }
    } catch (err) {
      console.error('JWT Verification Error:', err);
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}
