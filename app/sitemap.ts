import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSiteOrigin, hasCommunityAmenityMap } from "@/lib/amenities";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = headers().get("x-domain") || "";
  const baseUrl = getSiteOrigin(host);
  const lastModified = new Date();

  type PageDef = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  };

  const corePages: PageDef[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/listings", priority: 0.9, changeFrequency: "daily" },
    { path: "/why-berkshire-hathaway", priority: 0.9, changeFrequency: "monthly" },
    { path: "/market-report", priority: 0.9, changeFrequency: "weekly" },
    { path: "/market-update", priority: 0.9, changeFrequency: "weekly" },
    { path: "/market-insights", priority: 0.9, changeFrequency: "monthly" },
    { path: "/google-business", priority: 0.85, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  ];

  if (hasCommunityAmenityMap(host)) {
    corePages.push({ path: "/amenities", priority: 0.9, changeFrequency: "monthly" });
  }

  const servicePages: PageDef[] = [
    { path: "/buyers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sellers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/luxury-homes", priority: 0.8, changeFrequency: "weekly" },
    { path: "/new-construction", priority: 0.8, changeFrequency: "weekly" },
    { path: "/investment-properties", priority: 0.8, changeFrequency: "weekly" },
    { path: "/relocation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/home-valuation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/55-plus-communities", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  ];

  const neighborhoodPages: PageDef[] = [
    { path: "/neighborhoods", priority: 0.8, changeFrequency: "weekly" },
    { path: "/neighborhoods/centennial-hills", priority: 0.85, changeFrequency: "weekly" },
    { path: "/neighborhoods/summerlin", priority: 0.8, changeFrequency: "weekly" },
    { path: "/neighborhoods/north-las-vegas", priority: 0.75, changeFrequency: "weekly" },
  ];

  const allPages = [...corePages, ...servicePages, ...neighborhoodPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}