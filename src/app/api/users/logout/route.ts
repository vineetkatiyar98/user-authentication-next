import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await NextResponse.json({
      message: "user logout successfully",
      success: true,
    });

    response.cookies.set("token", "",{
     httpOnly : true,
     expires : new Date(0)
    })

    return response;

  } catch (error :any) {
     return NextResponse.json({
          error: error.message,
  })
};
}