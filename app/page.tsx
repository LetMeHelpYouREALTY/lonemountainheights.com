import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import { HomeHeroCtas } from "@/components/home/HomeHeroCtas";
import Link from "next/link";
import Image from "next/image";
import { Home as HomeIcon, TrendingUp, Shield, Users } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { NearbyAmenitiesSection } from "@/components/amenities/NearbyAmenitiesSection";
import { getSiteOrigin } from "@/lib/amenities";
import { headers } from "next/headers";
import {
  buildFaqPageSchema,
  LONE_MOUNTAIN_MARKET_STATS,
  LONE_MOUNTAIN_SITE_FAQ,
} from "@/lib/lone-mountain-content";

export default async function Home() {
  const config = await getPageDomainConfig();
  const hostname = headers().get("x-domain") || "";
  const siteOrigin = getSiteOrigin(hostname);
  const isLoneMountainHeights = config.domain === "lonemountainheights.com";
  const marketStats = isLoneMountainHeights
    ? LONE_MOUNTAIN_MARKET_STATS
    : ([
        { value: "$450K", label: "Median Price", sub: "+4.2% YoY" },
        { value: "28", label: "Avg Days on Market", sub: "" },
        { value: "4,850", label: "Active Listings", sub: "" },
        { value: "2.1", label: "Months Inventory", sub: "" },
      ] as const);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Dr. Jan Duffy - ${config.neighborhood} Real Estate`,
    url: siteOrigin,
    telephone: "+17022221964",
    image: `${siteOrigin}/Image/agent1.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
    },
  };

  const faqSchema = isLoneMountainHeights
    ? buildFaqPageSchema(LONE_MOUNTAIN_SITE_FAQ)
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <Navbar />
      <main>
        {/* Domain-Aware Hero — conversion first; MLS search sits below */}
        <section className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
          />
          <div className="relative z-10 container mx-auto px-4">
            <div
              className={
                isLoneMountainHeights
                  ? "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center max-w-6xl mx-auto"
                  : "text-center max-w-4xl mx-auto"
              }
            >
              <div className={isLoneMountainHeights ? "" : "mx-auto"}>
                {config.ctaBadge && (
                  <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                    {config.ctaBadge}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {config.heroHeadline}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-3xl">
                  {config.heroSubheadline}
                </p>
                {isLoneMountainHeights ? (
                  <p className="text-base md:text-lg text-white/85 mb-8 max-w-2xl">
                    <strong className="text-white">Answer:</strong> Lone Mountain Heights homes sit
                    in Northwest Las Vegas (ZIP 89129) along the Lone Mountain corridor—trail access
                    at Lone Mountain Regional Park and short drives to Durango, Centennial Hills,
                    and the 215 beltway.
                  </p>
                ) : null}
                <HomeHeroCtas />
                <div
                  className={`mt-10 flex flex-wrap gap-6 text-white/80 text-sm ${
                    isLoneMountainHeights ? "" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">500+</span>
                    <span>Families Helped</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">30+ Years</span>
                    <span>Las Vegas Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">5.0★</span>
                    <span>Realtor.com (50 reviews)</span>
                  </div>
                </div>
              </div>
              {isLoneMountainHeights ? (
                <aside className="hidden lg:block">
                  <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                    <Image
                      src="/Image/agent1.jpg"
                      alt="Dr. Jan Duffy, REALTOR® — Lone Mountain Heights specialist"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 0vw, 400px"
                    />
                  </div>
                  <p className="text-center text-sm text-white/70 mt-4">
                    Dr. Jan Duffy · License S.0197614.LLC · BHHS Nevada Properties
                  </p>
                </aside>
              ) : null}
            </div>
          </div>
        </section>

        {/* RealScout MLS search — directly under hero */}
        <section
          className="py-12 md:py-16 bg-white border-b border-slate-200"
          aria-labelledby="home-search-heading"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 id="home-search-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Search {config.neighborhood} Homes
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Live MLS results for Northwest Las Vegas and the wider valley—filter by price, beds, and
              map around Lone Mountain.
            </p>
            <div className="flex justify-center">
              <RealScoutSimpleSearch
                agentEncodedId={config.realscoutAgentId}
                className="max-w-3xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — the most trusted name in Las Vegas
                real estate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Trusted Brand",
                  desc: "Backed by Warren Buffett's Berkshire Hathaway — unmatched integrity",
                },
                {
                  icon: Users,
                  title: "50K+ Network",
                  desc: "Global referral network for seamless moves to or from any market",
                },
                {
                  icon: TrendingUp,
                  title: "$127M+ Sold",
                  desc: "Proven results across every Las Vegas neighborhood since 2008",
                },
                {
                  icon: HomeIcon,
                  title: "Full Service",
                  desc: "Buying, selling, 55+, luxury, investment — one expert handles it all",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">{config.neighborhood} Real Estate Market</h2>
              <p className="text-slate-400">Current data — updated regularly</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {marketStats.map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-1">{value}</div>
                  <div className="text-slate-300 text-sm">{label}</div>
                  {sub ? <div className="text-green-400 text-xs mt-1">{sub}</div> : null}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Full Market Report
              </Link>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection variant="home" />
        <RealScoutListings />
        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection
          faqs={isLoneMountainHeights ? LONE_MOUNTAIN_SITE_FAQ : undefined}
          title={isLoneMountainHeights ? "Lone Mountain Heights Real Estate FAQ" : undefined}
          subtitle={
            isLoneMountainHeights
              ? "Straight answers about Northwest Las Vegas homes near Lone Mountain"
              : undefined
          }
        />

        {/* Domain-Specific CTA */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.ctaHeadline}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{config.ctaSubheadline}</p>
            <HomeHeroCtas calendlyUrl="https://calendly.com/drjanduffy/showing" />
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}