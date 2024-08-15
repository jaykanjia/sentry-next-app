"use client";
import React from "react";

const ErrorButton = () => {
	return (
		<button
			type="button"
			className="bg-[#AD6CAA] rounded-md text-white p-3 cursor-pointer"
			onClick={() => {
				throw new Error("Sentry Frontend Error");
			}}
		>
			Throw Sentry error
		</button>
	);
};

export default ErrorButton;
