import Link from "next/link";
import { headers } from "next/headers";
import { getCommunityAmenityConfig } from "@/lib/amenities";
import { AmenityMap } from "./AmenityMap";

type NearbyAmenitiesSectionProps = {
  variant?: "home" | "full";
};

export async function NearbyAmenitiesSection({ variant = "home" }: NearbyAmenitiesSectionProps) {
  const hostname = headers().get("x-domain") || "";
  const config = getCommunityAmenityConfig(hostname);
  if (!config) return null;

  const heading =
    variant === "home"
      ? `Life Near ${config.communityName}`
      : `What's Nearby in ${config.communityName}`;

  return (
    <section
      className="py-16 md:py-20 bg-slate-50"
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 id="nearby-amenities-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-slate-600">
            Explore restaurants, parks, grocery stores, healthcare, and more around{" "}
            {config.communityName} in {config.city}. Switch categories on the map, then dive deeper on
            the amenities page.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <AmenityMap config={config} compact={variant === "home"} />
          <div className="text-center mt-8">
            <Link
              href="/amenities"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              View full nearby amenities guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
