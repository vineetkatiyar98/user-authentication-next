import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/auth/signup" || path === "/auth/signin";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.nextUrl));
  }
}

export const config = {
  matcher: ["/auth/signup", "/auth/signin", "/auth/profile"],
};
