import Link from "next/link";

type BhhsNevadaMarkProps = {
	variant?: "light" | "dark";
	className?: string;
};

const BROKERAGE_URL = "https://www.bhhsnv.com/";

/** Typographic BHHS Nevada mark — replace with `public/images/logos/bhhs-nevada-properties.png` when available. */
export function BhhsNevadaMark({ variant = "light", className = "" }: BhhsNevadaMarkProps) {
	const isLight = variant === "light";

	return (
		<Link
			href={BROKERAGE_URL}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex flex-col no-underline hover:opacity-90 ${className}`}
		>
			<span className="sr-only">Berkshire Hathaway HomeServices Nevada Properties (opens in a new tab)</span>
			<span className={`font-semibold leading-tight ${isLight ? "text-white" : "text-slate-900"}`}>
				Berkshire Hathaway
				<span className={isLight ? "text-[var(--lmh-gold,#c9a962)]" : "text-blue-700"}>
					{" "}
					HomeServices
				</span>
			</span>
			<span className={`text-xs ${isLight ? "text-slate-400" : "text-slate-600"}`}>
				Nevada Properties
			</span>
		</Link>
	);
}