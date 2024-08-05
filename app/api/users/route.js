import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();
  try {
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
