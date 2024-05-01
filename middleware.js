import { NextResponse } from "next/server";
export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const hasSession = req?.cookies?.has("token");
  if (pathname == "/checkout") {
    if (!hasSession) return NextResponse.redirect(`${origin}`);
  }
  if (pathname.startsWith("/profile")) {
    if (!hasSession) return NextResponse.redirect(`${origin}`);
  }

  // if (pathname.startsWith("/payment_status")) {
  //   if (!hasSession) return NextResponse.redirect(`${origin}`);
  // }
}
