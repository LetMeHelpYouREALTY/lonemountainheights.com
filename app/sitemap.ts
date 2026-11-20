import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import {
	isLoneMountainHeightsDomain,
	LMH_NAP,
	LMH_SITEMAP_PATHS,
} from "@/lib/lone-mountain-heights";

export const dynamic = "force-dynamic";

function heyBerkshireSitemap(lastModified: Date): MetadataRoute.Sitemap {
	const baseUrl = "https://heyberkshire.com";

	const corePages = [
		{ url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/listings`, priority: 0.9, changeFrequency: "daily" as const },
		{ url: `${baseUrl}/why-berkshire-hathaway`, priority: 0.9, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/market-report`, priority: 0.9, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/market-update`, priority: 0.9, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/market-insights`, priority: 0.9, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/google-business`, priority: 0.9, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "monthly" as const },
	];

	const servicePages = [
		{ url: `${baseUrl}/buyers`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/sellers`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/luxury-homes`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/new-construction`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/investment-properties`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/relocation`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/home-valuation`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/55-plus-communities`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/services`, priority: 0.7, changeFrequency: "monthly" as const },
	];

	const buyerPersonaPages = [
		{ url: `${baseUrl}/buyers/california-relocator`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/buyers/first-time-buyers`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/buyers/luxury-homes-las-vegas`, priority: 0.8, changeFrequency: "monthly" as const },
	];

	const sellerPersonaPages = [
		{ url: `${baseUrl}/sellers/move-up`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/sellers/downsizing`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/sellers/divorce-probate`, priority: 0.7, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/sellers/relocation`, priority: 0.8, changeFrequency: "monthly" as const },
	];

	const fiftyPlusCommunityPages = [
		{ url: `${baseUrl}/55-plus-communities/sun-city-summerlin`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/55-plus-communities/sun-city-anthem`, priority: 0.8, changeFrequency: "monthly" as const },
		{ url: `${baseUrl}/55-plus-communities/del-webb-lake-las-vegas`, priority: 0.8, changeFrequency: "monthly" as const },
	];

	const neighborhoodPages = [
		{ url: `${baseUrl}/neighborhoods`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/summerlin`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/henderson`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/green-valley`, priority: 0.7, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/the-ridges`, priority: 0.8, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/southern-highlands`, priority: 0.7, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/north-las-vegas`, priority: 0.7, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/skye-canyon`, priority: 0.7, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/centennial-hills`, priority: 0.7, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/inspirada`, priority: 0.7, changeFrequency: "weekly" as const },
		{ url: `${baseUrl}/neighborhoods/mountains-edge`, priority: 0.7, changeFrequency: "weekly" as const },
	];

	const allPages = [
		...corePages,
		...servicePages,
		...buyerPersonaPages,
		...sellerPersonaPages,
		...fiftyPlusCommunityPages,
		...neighborhoodPages,
	];

	return allPages.map((page) => ({
		url: page.url,
		lastModified,
		changeFrequency: page.changeFrequency,
		priority: page.priority,
	}));
}

function lmhSitemap(lastModified: Date): MetadataRoute.Sitemap {
	return LMH_SITEMAP_PATHS.map((entry) => ({
		url: `${LMH_NAP.siteUrl}${entry.path === "/" ? "" : entry.path}`,
		lastModified,
		changeFrequency: entry.changeFrequency,
		priority: entry.priority,
	}));
}

export default function sitemap(): MetadataRoute.Sitemap {
	const host = (headers().get("x-domain") || headers().get("host") || "").toLowerCase();
	const lastModified = process.env.NEXT_PUBLIC_BUILD_DATE
		? new Date(process.env.NEXT_PUBLIC_BUILD_DATE)
		: new Date();

	if (isLoneMountainHeightsDomain(host)) {
		return lmhSitemap(lastModified);
	}

	return heyBerkshireSitemap(lastModified);
}
