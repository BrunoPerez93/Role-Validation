import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await dbConnect();

    const { username, password, role } = await req.json();

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
    }

    const newUser = new User({ username, password, role });
    await newUser.save();

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error during user creation:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
