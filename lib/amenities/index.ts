import type { CommunityAmenityConfig } from "./types";
import { LONE_MOUNTAIN_AMENITY_CONFIG } from "./lone-mountain";

/** Domains that share the Lone Mountain hyperlocal amenity experience */
const LONE_MOUNTAIN_DOMAINS = new Set([
  "findlonemountainhomes.com",
  "lonemountainheights.com",
  "lonemountainvistas.com",
]);

export function getCommunityAmenityConfig(hostname: string): CommunityAmenityConfig | null {
  const clean = hostname.replace(/^www\./, "").toLowerCase().split(":")[0];
  if (LONE_MOUNTAIN_DOMAINS.has(clean)) {
    return LONE_MOUNTAIN_AMENITY_CONFIG;
  }
  return null;
}

export function hasCommunityAmenityMap(hostname: string): boolean {
  return getCommunityAmenityConfig(hostname) !== null;
}

export function getSiteOrigin(hostname: string): string {
  const clean = hostname.replace(/^www\./, "").toLowerCase().split(":")[0];
  if (!clean || clean === "localhost" || clean.startsWith("127.0.0.1")) {
    return process.env.NEXT_PUBLIC_SITE_URL ?? "https://findlonemountainhomes.com";
  }
  return `https://${clean}`;
}
