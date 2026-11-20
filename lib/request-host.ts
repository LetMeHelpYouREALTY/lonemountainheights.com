import { headers } from "next/headers";
import { isLoneMountainHeightsDomain } from "@/lib/lone-mountain-heights";

/** Host from middleware `x-domain` or request Host header. */
export function getRequestHostname(): string {
	const h = headers();
	return (h.get("x-domain") || h.get("host") || "").toLowerCase();
}

export function isLmhRequest(): boolean {
	return isLoneMountainHeightsDomain(getRequestHostname());
}
