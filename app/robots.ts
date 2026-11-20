import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSiteOrigin } from "@/lib/amenities";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("x-domain") || "";
  const origin = getSiteOrigin(host);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}