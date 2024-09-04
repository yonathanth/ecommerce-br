import { NextResponse } from "next/server";
// middleware.ts
import { auth } from "@/auth";

export default auth((req) => {
  // Redirect to login if not authenticated
  if (!req.auth && req.nextUrl.pathname !== "signin") {
    const newUrl = new URL("signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  // Proceed with the request if authenticated
  return NextResponse.next();
});

// Ensure your matcher is correctly set to protect the necessary routes
export const config = {
  matcher: ["/shop/checkout"],
};
