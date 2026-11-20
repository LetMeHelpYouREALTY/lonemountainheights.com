import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutOfficeSection from "@/components/realscout/RealScoutOfficeSection";
import CalendlyScheduleSection from "@/components/calendly/CalendlyScheduleSection";
import SectionEngagement from "@/components/sections/SectionEngagement";
import FAQSection from "@/components/sections/FAQSection";
import AgentPortrait from "@/components/brand/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import PageJsonLd from "@/components/seo/PageJsonLd";
import AeoAnswerBlock from "@/components/seo/AeoAnswerBlock";
import Link from "next/link";
import { Phone, Mountain, Trees, Car, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import {
  AGENT,
  BRAND,
  CALENDLY,
  LONE_MOUNTAIN_HEIGHTS,
  OFFICE,
} from "@/lib/brand";
import { marketStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Lone Mountain Heights Homes for Sale | Las Vegas 89129",
  description: BRAND.description,
  keywords: [...BRAND.keywords],
  openGraph: {
    title: "Lone Mountain Heights Homes for Sale",
    description: BRAND.description,
    images: [{ url: AGENT.portrait, alt: AGENT.portraitAlt }],
  },
};

export default function LoneMountainHeightsPage() {
  return (
    <>
      <PageJsonLd
        path="/neighborhoods/lone-mountain-heights"
        title="Lone Mountain Heights Homes for Sale | Las Vegas 89129"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Neighborhoods", url: "/neighborhoods" },
          { name: "Lone Mountain Heights", url: "/neighborhoods/lone-mountain-heights" },
        ]}
        faqs={[...LONE_MOUNTAIN_HEIGHTS.faqs]}
      />
      <Navbar />
      <main className="pt-24 pb-0">
        {/* Hero */}
        <section className="relative bg-slate-950 text-white py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/Image/hero_bg_2.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-[#1e3a8a]/50" />
          <div className="relative z-10 container mx-auto px-4">
            <nav className="text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white no-underline">
                Home
              </Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-white no-underline">
                Neighborhoods
              </Link>
              {" / "}
              <span className="text-white">Lone Mountain Heights</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end gap-8 max-w-5xl">
              <div className="flex-1">
                <p className="text-xs tracking-[0.2em] uppercase text-[#c9a227] font-semibold mb-3">
                  {BRAND.subscript}
                </p>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Lone Mountain Heights Homes for Sale
                </h1>
                <p className="text-xl text-white/85 max-w-2xl mb-6">
                  Gated Northwest Las Vegas living in ZIP 89129 — mountain views, spacious
                  single-family homes, and trail access at Lone Mountain.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CalendlyButton
                    url={CALENDLY.showing}
                    text="Book a Private Tour"
                    className="inline-flex items-center justify-center bg-[#c9a227] text-slate-900 px-6 py-3 rounded-md font-bold no-underline"
                  />
                  <a
                    href={AGENT.phoneTel}
                    className="inline-flex items-center justify-center border border-white/40 px-6 py-3 rounded-md font-bold no-underline hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {AGENT.phone}
                  </a>
                </div>
              </div>
              <AgentPortrait size="xl" priority className="mx-auto md:mx-0" />
            </div>
          </div>
        </section>

        <RealScoutOfficeSection
          title="Active Lone Mountain Heights Listings"
          subtitle="Live MLS office listings for Lone Mountain Heights and the broader 89129 corridor."
          priceMin="550000"
          priceMax="1200000"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  className="text-3xl font-semibold text-slate-900 mb-4"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Community lifestyle
                </h2>
                <p className="text-slate-600 text-lg mb-6">
                  Lone Mountain Heights is a gated residential community known for larger floor
                  plans, cul-de-sac privacy, and proximity to hiking at Lone Mountain Regional Park.
                  Buyers often compare it with Centennial Hills and Skye Canyon for Northwest
                  convenience without giving up a guarded entrance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Mountain, label: "Mountain & valley views" },
                    { icon: Trees, label: "Trail access nearby" },
                    { icon: Car, label: "US-95 freeway access" },
                    { icon: HomeIcon, label: "Spacious SFR floor plans" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg"
                    >
                      <Icon className="h-5 w-5 text-[#1e3a8a]" />
                      <span className="text-slate-800 text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <AgentPortrait size="md" />
                  <div>
                    <p className="font-semibold">{AGENT.name}</p>
                    <p className="text-sm text-slate-300">Your Lone Mountain Heights guide</p>
                  </div>
                </div>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <dt className="text-slate-400">Est. median</dt>
                    <dd className="font-semibold text-[#c9a227]">
                      {marketStats.loneMountainHeights.medianPriceFormatted}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <dt className="text-slate-400">Price band</dt>
                    <dd className="font-semibold">
                      {marketStats.loneMountainHeights.priceRange}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <dt className="text-slate-400">Avg DOM</dt>
                    <dd className="font-semibold">
                      {marketStats.loneMountainHeights.daysOnMarket} days
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">ZIP</dt>
                    <dd className="font-semibold">89129</dd>
                  </div>
                </dl>
                <SectionEngagement
                  headline="Get a CMA for this community"
                  body="Book a valuation consult — no forms."
                  variant="gold"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2
              className="text-3xl font-semibold text-slate-900 mb-4 text-center"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Buying or selling in Lone Mountain Heights
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Gated inventory moves on pricing accuracy. Dr. Jan Duffy prepares buyers with
              pre-tour comps and sellers with a day-one pricing strategy.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/buyers"
                className="block p-6 bg-white border border-slate-200 rounded-xl no-underline hover:border-[#c9a227]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AgentPortrait size="sm" />
                  <h3 className="font-bold text-slate-900">Buyers</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Pre-approval, private showings, and offer strategy for 89129 gated homes.
                </p>
              </Link>
              <Link
                href="/sellers"
                className="block p-6 bg-white border border-slate-200 rounded-xl no-underline hover:border-[#c9a227]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AgentPortrait size="sm" />
                  <h3 className="font-bold text-slate-900">Sellers</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Free CMA, prep checklist, and marketing that highlights view and outdoor living.
                </p>
              </Link>
            </div>
            <SectionEngagement />
          </div>
        </section>

        {/* NAP */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <AgentPortrait size="md" className="mx-auto mb-4" />
            <p className="font-semibold text-slate-900">{BRAND.fullName}</p>
            <p className="text-slate-600 text-sm mt-1">{OFFICE.full}</p>
            <p className="text-slate-600 text-sm">
              <a href={AGENT.phoneTel} className="font-semibold text-[#1e3a8a]">
                {AGENT.phone}
              </a>{" "}
              · Hours 9am–6pm daily
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a href={AGENT.phoneTel} className="text-sm font-semibold text-[#1e3a8a]">
                Call
              </a>
              <a
                href={OFFICE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#1e3a8a]"
              >
                Directions
              </a>
              <a
                href={OFFICE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#1e3a8a]"
              >
                View Google Reviews
              </a>
            </div>
          </div>
        </section>

        <AeoAnswerBlock title="Lone Mountain Heights — answers for buyers and relocators" />

        <FAQSection
          faqs={[...LONE_MOUNTAIN_HEIGHTS.faqs]}
          title="Lone Mountain Heights Questions"
          subtitle="GEO & AEO answers for buyers researching this gated community"
        />

        <CalendlyScheduleSection
          title="Tour Lone Mountain Heights"
          subtitle="Pick a time for a private gated-community showing or market briefing."
        />
      </main>
      <Footer />
    </>
  );
}
