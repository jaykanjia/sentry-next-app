import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
	throw new Error("API throw error test");
	return NextResponse.json(
		{ data: "Testing Sentry Error..." },
		{ status: 200 }
	);
}
