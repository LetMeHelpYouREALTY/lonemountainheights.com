import type { FAQ } from "@/components/sections/FAQSection";

export const LONE_MOUNTAIN_HEIGHTS_DOMAIN = "lonemountainheights.com";

/** Client CTA line for this site (not the FUB professional line). */
export const LMH_NAP = {
	businessName: "Lone Mountain Heights | Homes By Dr. Jan Duffy",
	agentName: "Dr. Jan Duffy",
	license: "S.0197614.LLC",
	brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
	phoneDisplay: "(702) 222-1964",
	phoneTel: "+17022221964",
	email: "homes@heyberkshire.com",
	streetAddress: "9406 W Lake Mead Blvd, Suite 100",
	addressLocality: "Las Vegas",
	addressRegion: "NV",
	postalCode: "89134",
	addressCountry: "US",
	addressFull: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
	/** Approximate Lone Mountain / NW corridor pin for Place geo (not fabricated sales stats). */
	geo: { latitude: 36.2365, longitude: -115.267 },
	officeGeo: { latitude: 36.1893, longitude: -115.2821 },
	siteUrl: "https://www.lonemountainheights.com",
	brokerageUrl: "https://www.bhhsnv.com/",
	sameAs: ["https://www.bhhsnv.com/"],
	openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
} as const;

export const LMH_SITEMAP_PATHS = [
	{ path: "/", priority: 1, changeFrequency: "weekly" as const },
	{ path: "/listings", priority: 0.9, changeFrequency: "daily" as const },
	{ path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
	{ path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/neighborhoods/centennial-hills", priority: 0.7, changeFrequency: "weekly" as const },
	{ path: "/buyers", priority: 0.7, changeFrequency: "monthly" as const },
] as const;

export function isLoneMountainHeightsDomain(hostname: string): boolean {
	return hostname.replace(/^www\./, "").toLowerCase() === LONE_MOUNTAIN_HEIGHTS_DOMAIN;
}

export const LMH_FAQ: FAQ[] = [
	{
		question: "Where is Lone Mountain Heights in Las Vegas?",
		answer:
			"Lone Mountain Heights sits in Northwest Las Vegas along the Lone Mountain corridor, west of the I-215 beltway. The area is known for foothill views, larger lots, and quick access to Summerlin and Centennial Hills.",
	},
	{
		question: "What kinds of homes are in Lone Mountain Heights?",
		answer:
			"The neighborhood features primarily single-family homes with desert and mountain views. Inventory ranges from established resale to updated properties; use the live search on this site or schedule a tour with Dr. Jan Duffy for current availability.",
	},
	{
		question: "How do I schedule a Lone Mountain Heights home tour?",
		answer:
			"Book a consultation or showing through Calendly on this site, or call (702) 222-1964. Dr. Jan Duffy provides buyer representation through Berkshire Hathaway HomeServices Nevada Properties.",
	},
	{
		question: "Does Dr. Jan Duffy work with out-of-state buyers?",
		answer:
			"Yes. Dr. Jan Duffy helps California and out-of-state buyers compare Northwest Las Vegas communities, preview homes remotely when possible, and tour in person on your timeline.",
	},
	{
		question: "What is the price range for Lone Mountain Heights homes?",
		answer:
			"Asking prices move with inventory and condition. Use the live MLS search on this site for current list prices, or call (702) 222-1964 for comps on specific streets—no fabricated market averages on this page.",
	},
];

/** Short AEO lead answers (visible under H2s; keep in sync with FAQ themes). */
export const LMH_AEO_ANSWERS = [
	{
		id: "location",
		heading: "Where is Lone Mountain Heights?",
		answer:
			"Lone Mountain Heights is a Northwest Las Vegas neighborhood along the Lone Mountain corridor, west of I-215, with foothill views and access to Summerlin and Centennial Hills.",
	},
	{
		id: "tour",
		heading: "How do I tour homes here?",
		answer:
			"Schedule a buyer consultation or showing on Calendly, or call Dr. Jan Duffy at (702) 222-1964. Representation is through Berkshire Hathaway HomeServices Nevada Properties.",
	},
	{
		id: "search",
		heading: "How do I search Lone Mountain Heights listings?",
		answer:
			"Use the live RealScout MLS search on this homepage for current Lone Mountain Heights and Northwest Las Vegas inventory, then book a showing when you find a match.",
	},
] as const;

export function buildLmhFaqJsonLd(faqs: FAQ[] = LMH_FAQ) {
	return {
		"@type": "FAQPage",
		"@id": `${LMH_NAP.siteUrl}/#faq`,
		mainEntity: faqs.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}

export function buildLmhPlaceJsonLd(siteUrl: string = LMH_NAP.siteUrl) {
	return {
		"@type": "Place",
		"@id": `${siteUrl}/#place`,
		name: "Lone Mountain Heights",
		description:
			"Residential neighborhood in Northwest Las Vegas, Nevada, along the Lone Mountain corridor near the I-215 beltway.",
		geo: {
			"@type": "GeoCoordinates",
			latitude: LMH_NAP.geo.latitude,
			longitude: LMH_NAP.geo.longitude,
		},
		containedInPlace: {
			"@type": "City",
			name: "Las Vegas",
			addressRegion: "NV",
			addressCountry: "US",
		},
	};
}

export function buildLmhAgentJsonLd(siteUrl: string = LMH_NAP.siteUrl) {
	return {
		"@type": "RealEstateAgent",
		"@id": `${siteUrl}/#agent`,
		name: LMH_NAP.agentName,
		jobTitle: "REALTOR®",
		telephone: LMH_NAP.phoneTel,
		email: LMH_NAP.email,
		url: siteUrl,
		image: `${siteUrl}/images/agent/dr-jan-duffy.jpg`,
		address: {
			"@type": "PostalAddress",
			streetAddress: LMH_NAP.streetAddress,
			addressLocality: LMH_NAP.addressLocality,
			addressRegion: LMH_NAP.addressRegion,
			postalCode: LMH_NAP.postalCode,
			addressCountry: LMH_NAP.addressCountry,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: LMH_NAP.officeGeo.latitude,
			longitude: LMH_NAP.officeGeo.longitude,
		},
		openingHours: [...LMH_NAP.openingHours],
		sameAs: [...LMH_NAP.sameAs],
		worksFor: {
			"@type": "RealEstateAgent",
			"@id": `${siteUrl}/#brokerage`,
			name: LMH_NAP.brokerage,
			url: LMH_NAP.brokerageUrl,
		},
		hasCredential: {
			"@type": "EducationalOccupationalCredential",
			credentialCategory: "Real Estate License",
			credentialNumber: LMH_NAP.license,
		},
		areaServed: [
			{ "@id": `${siteUrl}/#place` },
			{
				"@type": "AdministrativeArea",
				name: "Northwest Las Vegas",
			},
			{
				"@type": "City",
				name: "Las Vegas",
				addressRegion: "NV",
			},
		],
	};
}

export function buildLmhOrganizationJsonLd(siteUrl: string = LMH_NAP.siteUrl) {
	return {
		"@type": "Organization",
		"@id": `${siteUrl}/#organization`,
		name: LMH_NAP.businessName,
		url: siteUrl,
		logo: `${siteUrl}/images/agent/dr-jan-duffy.jpg`,
		telephone: LMH_NAP.phoneTel,
		email: LMH_NAP.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: LMH_NAP.streetAddress,
			addressLocality: LMH_NAP.addressLocality,
			addressRegion: LMH_NAP.addressRegion,
			postalCode: LMH_NAP.postalCode,
			addressCountry: LMH_NAP.addressCountry,
		},
		parentOrganization: { "@id": `${siteUrl}/#brokerage` },
	};
}

export function buildLmhWebSiteJsonLd(siteUrl: string = LMH_NAP.siteUrl) {
	return {
		"@type": "WebSite",
		"@id": `${siteUrl}/#website`,
		url: siteUrl,
		name: "Lone Mountain Heights Homes | Dr. Jan Duffy",
		description:
			"Lone Mountain Heights homes for sale in Northwest Las Vegas with live MLS search and Calendly scheduling.",
		publisher: { "@id": `${siteUrl}/#organization` },
		about: { "@id": `${siteUrl}/#place` },
	};
}

/** Single @graph for SEO / GEO / AEO entity grounding. */
export function buildLmhSiteGraphJsonLd(siteUrl: string = LMH_NAP.siteUrl) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			buildLmhOrganizationJsonLd(siteUrl),
			{
				"@type": "RealEstateAgent",
				"@id": `${siteUrl}/#brokerage`,
				name: LMH_NAP.brokerage,
				url: LMH_NAP.brokerageUrl,
			},
			buildLmhAgentJsonLd(siteUrl),
			buildLmhPlaceJsonLd(siteUrl),
			buildLmhWebSiteJsonLd(siteUrl),
			buildLmhFaqJsonLd(LMH_FAQ),
		],
	};
}

export function serializeJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildCalendlyUrl(
	event: "buyer-consultation-30-min" | "showing" | "listing-consultation",
	utmContent: string,
): string {
	const params = new URLSearchParams({
		utm_source: LONE_MOUNTAIN_HEIGHTS_DOMAIN,
		utm_medium: "website",
		utm_campaign: event,
		utm_content: utmContent,
	});
	return `https://calendly.com/drjanduffy/${event}?${params.toString()}`;
}
