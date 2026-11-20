import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import {
	isLoneMountainHeightsDomain,
	LMH_NAP,
} from "@/lib/lone-mountain-heights";

export const dynamic = "force-dynamic";

const AI_USER_AGENTS = [
	"GPTBot",
	"ChatGPT-User",
	"OAI-SearchBot",
	"ClaudeBot",
	"Claude-User",
	"Claude-SearchBot",
	"anthropic-ai",
	"PerplexityBot",
	"Google-Extended",
	"cohere-ai",
	"Applebot-Extended",
	"Amazonbot",
	"meta-externalagent",
	"meta-externalfetcher",
	"YouBot",
	"Diffbot",
	"CCBot",
	"Bytespider",
] as const;

export default function robots(): MetadataRoute.Robots {
	const host = (headers().get("x-domain") || headers().get("host") || "").toLowerCase();
	const isLmh = isLoneMountainHeightsDomain(host);
	const sitemap = isLmh
		? `${LMH_NAP.siteUrl}/sitemap.xml`
		: "https://heyberkshire.com/sitemap.xml";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			...AI_USER_AGENTS.map((userAgent) => ({
				userAgent,
				allow: "/" as const,
			})),
		],
		sitemap,
		host: isLmh ? LMH_NAP.siteUrl.replace(/^https:\/\//, "") : "heyberkshire.com",
	};
}
