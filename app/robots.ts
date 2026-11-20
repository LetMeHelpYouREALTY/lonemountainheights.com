import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/llms.txt",
          "/humans.txt",
          "/neighborhoods/",
          "/buyers/",
          "/sellers/",
          "/about/",
          "/contact/",
        ],
        disallow: ["/api/", "/admin/", "/_next/", "/monitoring/"],
      },
      { userAgent: "GPTBot", allow: ["/", "/llms.txt"] },
      { userAgent: "ChatGPT-User", allow: ["/", "/llms.txt"] },
      { userAgent: "Google-Extended", allow: ["/", "/llms.txt"] },
      { userAgent: "PerplexityBot", allow: ["/", "/llms.txt"] },
      { userAgent: "ClaudeBot", allow: ["/", "/llms.txt"] },
      { userAgent: "anthropic-ai", allow: ["/", "/llms.txt"] },
      { userAgent: "AhrefsBot", crawlDelay: 10 },
      { userAgent: "SemrushBot", crawlDelay: 10 },
      { userAgent: "Bingbot", crawlDelay: 5 },
      { userAgent: "facebookexternalhit", allow: ["/"] },
      { userAgent: "Twitterbot", allow: ["/"] },
      { userAgent: "LinkedInBot", allow: ["/"] },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/_next/image"],
      },
    ],
    sitemap: "https://lonemountainheights.com/sitemap.xml",
    host: "https://lonemountainheights.com",
  };
}
