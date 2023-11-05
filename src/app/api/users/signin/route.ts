import { connect } from "@/dbConfig/db";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    //check if user not exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ status: 404, message: "User not found" });
    }

    //check if password does't match
    const salt = await bcryptjs.compare( password, user.password,);
    if (!salt) {
      return NextResponse.json({ status: 404, message: "password not match" });
    }

    console.log(user);
    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "sign in successfully",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
