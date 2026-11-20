import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const hostname = request.headers.get("host") || "";
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-domain", hostname);

	const response = NextResponse.next({
		request: { headers: requestHeaders },
	});
	response.headers.set("x-domain", hostname);
	return response;
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon|images|videos).*)"],
};
