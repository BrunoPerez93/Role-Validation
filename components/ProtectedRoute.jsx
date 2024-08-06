'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && allowedRoles.includes(user.role)) {
      setIsLoading(false);
    } else {
      router.push('/error/403');
    }
  }, [user, allowedRoles, router]);

  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'><Loading/></div>; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
