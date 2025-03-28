import { type NextRequest, NextResponse } from "next/server";

const GUEST_ROUTES = [
	"/login",
	"/register",
	"/forgot-password",
	"/reset-password",
];

export async function middleware(request: NextRequest) {
	const isGuestRoute = GUEST_ROUTES.includes(request.nextUrl.pathname);
	const isAuthenticated = await checkAuth(request.headers);

	if (isAuthenticated && isGuestRoute) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	if (isAuthenticated || isGuestRoute) {
		return NextResponse.next();
	}

	return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
	],
};

async function checkAuth(headers: Headers) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
		method: "GET",
		credentials: "include",
		headers: {
			cookie: headers.get("cookie") ?? "",
		},
		cache: "no-cache",
	});

	if (response.status === 200) {
		return true;
	}

	return false;
}
