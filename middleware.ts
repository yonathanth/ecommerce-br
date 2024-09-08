import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Protect /admin routes, ensure only admins can access
  if (pathname.startsWith("/admin")) {
    // Redirect to sign-in if not logged in
    if (!token) {
      return NextResponse.redirect(
        new URL(`/auth/signin?callbackUrl=${req.nextUrl.pathname}`, req.url)
      );
    }

    // If logged in but not an admin, redirect to unauthorized page
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Protect /checkout route, ensure the user is logged in (any user role)
  if (pathname.startsWith("/checkout") && !token) {
    return NextResponse.redirect(
      new URL(`/auth/signin?callbackUrl=${req.nextUrl.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/checkout"],
};
