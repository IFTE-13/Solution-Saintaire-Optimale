import { NextResponse, NextRequest } from "next/server"; // Import NextRequest
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) { // Use NextRequest here
  const response = nextIntlMiddleware(request);

  // Optionally, manually set the NEXT_LOCALE cookie with additional options
  if (response.cookies.get("NEXT_LOCALE")) {
    response.cookies.set({
      name: "NEXT_LOCALE",
      value: response.cookies.get("NEXT_LOCALE")!.value,
      path: "/",
      secure: process.env.NODE_ENV === "production", // Ensure secure in production
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};