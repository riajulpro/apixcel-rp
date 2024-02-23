import { connectDB } from "@/lib/connect";
import User from "@/models/userModels";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    await connectDB();

    const { username, email, password } = await request.json();
    const exists = await User.findOne({ $or: [{ username }, { email }] });

    if (exists) {
      return NextResponse.json(
        {
          message: "Username or email already exists.",
        },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json(
      {
        message: "User successfully registered!",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "User registration failed!",
      },
      { status: 500 }
    );
  }
}
