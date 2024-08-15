import ApiErrorButton from "@/components/ApiErrorButton";
import ErrorButton from "@/components/ErrorButton";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center gap-8 min-h-screen h-full ">
			<h1 className="text-4xl font-semibold">Next.js + Sentry</h1>
			<Link href="/sentry-example-page" className="underline">
				Go to Sentry Example Page
			</Link>
			<ErrorButton />
			<ApiErrorButton />
		</main>
	);
}
