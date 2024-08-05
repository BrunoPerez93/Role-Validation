import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await dbConnect();

    const { username, password } = await req.json();

    const user = await User.findOne({ username, password });

    if (user) {
      return NextResponse.json({ valid: true, user: { username: user.username, role: user.role } });
    } else {
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
