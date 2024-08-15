"use client";
import React from "react";

const ApiErrorButton = () => {
	return (
		<button
			type="button"
			className="bg-rose-800 rounded-md text-white p-3 cursor-pointer"
			onClick={async () => {
				const res = await fetch("/api/error");
				if (!res.ok) {
					throw new Error("Sentry api error");
				}
			}}
		>
			Throw Sentry API error
		</button>
	);
};

export default ApiErrorButton;
