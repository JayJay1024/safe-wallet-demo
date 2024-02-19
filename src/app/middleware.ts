import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  return response;
}

export const config = {
  matcher: "/safe-wallet-demo/manifest.json",
};
