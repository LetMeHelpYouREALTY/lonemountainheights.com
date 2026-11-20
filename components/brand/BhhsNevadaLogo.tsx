"use client";

import Image from "next/image";
import { useState } from "react";
import { BhhsNevadaMark } from "@/components/brand/BhhsNevadaMark";

type BhhsNevadaLogoProps = {
	variant?: "light" | "dark";
	className?: string;
};

/** Prefer official PNG at /images/logos/bhhs-nevada-properties.png; falls back to typographic mark. */
export function BhhsNevadaLogo({ variant = "light", className = "" }: BhhsNevadaLogoProps) {
	const [imgFailed, setImgFailed] = useState(false);

	if (imgFailed) {
		return <BhhsNevadaMark variant={variant} className={className} />;
	}

	return (
		<a
			href="https://www.bhhsnv.com/"
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-block no-underline ${className}`}
		>
			<Image
				src="/images/logos/bhhs-nevada-properties.png"
				alt="Berkshire Hathaway HomeServices Nevada Properties"
				width={240}
				height={48}
				className="h-10 w-auto max-w-[240px] object-contain object-left"
				onError={() => setImgFailed(true)}
			/>
		</a>
	);
}