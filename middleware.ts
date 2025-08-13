import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Allow requests to public routes
  const isPublicRoute = 
    pathname === "/sign-in" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/validate-access-code") ||
    pathname.startsWith("/signup") || // Next.js internal routes
    pathname.startsWith("/static") || // Static files
    pathname.startsWith("/_next") ||
      pathname.match(/\.(.*)$/) || // allow static file extensions like .png, .jpg, .css, etc.
    pathname === "/favicon.ico";

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect to /sign-in if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Check user status and redirect accordingly
  if (token.agreedTerms !== undefined && token.hasBusinessProfile !== undefined) {
    // If user hasn't agreed to terms, redirect to terms page
    if (!token.agreedTerms && pathname !== "/terms-and-conditions") {
      return NextResponse.redirect(new URL("/terms-and-conditions", req.url));
    }

    // // If user has agreed to terms but hasn't created a profile, redirect to create profile
    if (token.agreedTerms && !token.hasBusinessProfile) {
      // return NextResponse.redirect(new URL("/on-boarding", req.url));
    }

    // // If user has agreed to terms and has a profile, redirect to dashboard if on terms or create-profile
    // if (token.agreedTerms && token.hasBusinessProfile && 
    //     (pathname === "/terms-and-conditions" || pathname === "/create-profile")) {
    //   return NextResponse.redirect(new URL("/dashboard", req.url));
    // }
  }

  return NextResponse.next();
}
