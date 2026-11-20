import { LMH_NAP } from "@/lib/lone-mountain-heights";

/** Default heyberkshire / shared multi-domain NAP (FUB professional line on non-LMH hosts). */
const DEFAULT_NAP = {
	phoneDisplay: "(702) 500-1942",
	phoneTel: "+17025001942",
	email: "homes@heyberkshire.com",
	siteUrl: "https://heyberkshire.com",
	streetAddress: "9406 W Lake Mead Blvd, Suite 100",
	addressLocality: "Las Vegas",
	addressRegion: "NV",
	postalCode: "89134",
	addressCountry: "US",
} as const;

export type ContactNap = {
	phoneDisplay: string;
	phoneTel: string;
	email: string;
	siteUrl: string;
	streetAddress: string;
	addressLocality: string;
	addressRegion: string;
	postalCode: string;
	addressCountry: string;
};

export function getContactNap(isLmh: boolean): ContactNap {
	if (isLmh) {
		return {
			phoneDisplay: LMH_NAP.phoneDisplay,
			phoneTel: LMH_NAP.phoneTel,
			email: LMH_NAP.email,
			siteUrl: LMH_NAP.siteUrl,
			streetAddress: LMH_NAP.streetAddress,
			addressLocality: LMH_NAP.addressLocality,
			addressRegion: LMH_NAP.addressRegion,
			postalCode: LMH_NAP.postalCode,
			addressCountry: LMH_NAP.addressCountry,
		};
	}
	return { ...DEFAULT_NAP };
}
