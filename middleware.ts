// import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auuth";

// export function middleware (request :any){
//     return NextResponse.redirect(new URL ("/about, request.url"))

// }

export const middleware = auth;
export const config = {
  matcher: ["/account"],
};
