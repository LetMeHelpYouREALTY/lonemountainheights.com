import type { FAQ } from "@/components/sections/FAQSection";

export const LONE_MOUNTAIN_HEIGHTS_DOMAIN = "lonemountainheights.com";

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
			"The neighborhood features primarily single-family homes with desert and mountain views. Inventory ranges from established resale to updated properties; use the live search below or schedule a tour with Dr. Jan Duffy for current availability.",
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
];

export function buildLmhFaqJsonLd(faqs: FAQ[] = LMH_FAQ) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
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

export function buildLmhPlaceJsonLd(siteUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "Place",
		"@id": `${siteUrl}/#lone-mountain-heights`,
		name: "Lone Mountain Heights",
		description:
			"Residential neighborhood in Northwest Las Vegas, Nevada, along the Lone Mountain corridor.",
		containedInPlace: {
			"@type": "City",
			name: "Las Vegas",
			addressRegion: "NV",
			addressCountry: "US",
		},
	};
}

export function buildLmhAgentJsonLd(siteUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"@id": `${siteUrl}/#real-estate-agent`,
		name: "Dr. Jan Duffy",
		jobTitle: "REALTOR®",
		telephone: "+17022221964",
		url: siteUrl,
		image: `${siteUrl}/images/agent/dr-jan-duffy.jpg`,
		worksFor: {
			"@type": "Organization",
			name: "Berkshire Hathaway HomeServices Nevada Properties",
		},
		areaServed: [
			{
				"@type": "Place",
				name: "Lone Mountain Heights",
				containedInPlace: { "@type": "City", name: "Las Vegas", addressRegion: "NV" },
			},
			"Northwest Las Vegas",
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