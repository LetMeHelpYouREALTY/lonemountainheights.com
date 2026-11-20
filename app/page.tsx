import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutOfficeSection from "@/components/realscout/RealScoutOfficeSection";
import CalendlyScheduleSection from "@/components/calendly/CalendlyScheduleSection";
import SectionEngagement from "@/components/sections/SectionEngagement";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import AgentPortrait from "@/components/brand/AgentPortrait";
import BrandLogo from "@/components/brand/BrandLogo";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import AeoAnswerBlock from "@/components/seo/AeoAnswerBlock";
import Link from "next/link";
import {
  Phone,
  Mountain,
  Shield,
  Home as HomeIcon,
  MapPin,
} from "lucide-react";
import {
  AGENT,
  BRAND,
  CALENDLY,
  LONE_MOUNTAIN_HEIGHTS,
  OFFICE,
  REALSCOUT,
} from "@/lib/brand";
import { commonFAQs, marketStats } from "@/lib/site-config";
import PageJsonLd from "@/components/seo/PageJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${BRAND.name} Homes for Sale | ${BRAND.subscript}`,
  description: BRAND.description,
  keywords: [...BRAND.keywords],
  alternates: {
    canonical: BRAND.url,
  },
  openGraph: {
    title: `${BRAND.name} Homes for Sale | ${BRAND.subscript}`,
    description: BRAND.description,
    url: BRAND.url,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <PageJsonLd
        path="/"
        title={`${BRAND.name} Homes for Sale | ${BRAND.subscript}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Lone Mountain Heights",
            url: "/neighborhoods/lone-mountain-heights",
          },
        ]}
      />
      <Navbar />
      <main>
        {/* Hero — brand-first, full-bleed */}
        <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-[#1e3a8a]/45" />
          <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
            <div className="max-w-3xl">
              <div className="mb-8 [&_span.text-slate-900]:text-white [&_.text-slate-900]:text-white">
                <BrandLogo variant="hero" showPortrait />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Gated homes. Mountain light.
                <span className="block text-[#c9a227]">
                  Lone Mountain Heights.
                </span>
              </h1>
              <p className="aeo-summary text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
                Lone Mountain Heights is a gated community in Northwest Las
                Vegas ZIP 89129 — mountain views, spacious floor plans, and
                private tours with Dr. Jan Duffy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CalendlyButton
                  url={CALENDLY.showing}
                  text="Book a Private Showing"
                  className="inline-flex items-center justify-center bg-[#c9a227] text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-[#d4af37] transition-colors no-underline"
                />
                <a
                  href={AGENT.phoneTel}
                  className="inline-flex items-center justify-center border border-white/50 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors no-underline"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {AGENT.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout office — directly below hero */}
        <RealScoutOfficeSection />

        {/* Community overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#c9a227] font-semibold mb-3">
                  About the Community
                </p>
                <h2
                  className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Why buyers choose Lone Mountain Heights
                </h2>
                <p className="text-slate-600 text-lg mb-6">
                  Lone Mountain Heights pairs gated privacy with Northwest Las
                  Vegas convenience — mountain and valley views, entertainer
                  floor plans, and quick access to US-95, shopping, and Lone
                  Mountain Regional Park trails.
                </p>
                <ul className="space-y-3 mb-8">
                  {LONE_MOUNTAIN_HEIGHTS.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <Mountain className="h-5 w-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <SectionEngagement
                  headline="Want street-level comps?"
                  body="I'll walk you through recent Lone Mountain Heights sales before you tour."
                  variant="light"
                />
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#1e3a8a]/10 to-[#c9a227]/20 rounded-2xl" />
                <div className="relative bg-slate-900 text-white rounded-2xl p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <AgentPortrait size="md" priority />
                    <div>
                      <p className="font-semibold text-lg">{AGENT.name}</p>
                      <p className="text-sm text-slate-300">
                        {BRAND.subscript}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-200 mb-6 italic leading-relaxed">
                    &ldquo;Lone Mountain Heights holds a premium in 89129
                    because gated privacy and mountain proximity still matter.
                    Inventory is thin — timing and pricing strategy win
                    deals.&rdquo;
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#c9a227]">
                        {marketStats.loneMountainHeights.medianPriceFormatted}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Est. community median
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#c9a227]">
                        {marketStats.loneMountainHeights.daysOnMarket}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Avg days on market
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market strip */}
        <section className="py-14 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Lone Mountain Heights Market Snapshot
              </h2>
              <p className="text-blue-100">
                Updated {marketStats.lastUpdated} · ZIP 89129 corridor
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  value: marketStats.loneMountainHeights.medianPriceFormatted,
                  label: "Median List Estimate",
                  sub: marketStats.loneMountainHeights.yearOverYearChange,
                },
                {
                  value: String(marketStats.loneMountainHeights.daysOnMarket),
                  label: "Avg Days on Market",
                  sub: "",
                },
                {
                  value: marketStats.loneMountainHeights.priceRange,
                  label: "Typical Price Band",
                  sub: "",
                },
                { value: "89129", label: "Primary ZIP", sub: "NW Las Vegas" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#c9a227] mb-1">
                    {value}
                  </div>
                  <div className="text-blue-100 text-sm">{label}</div>
                  {sub && (
                    <div className="text-emerald-300 text-xs mt-1">{sub}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-white text-[#1e3a8a] px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors no-underline"
              >
                Full Market Report
              </Link>
            </div>
            <SectionEngagement
              headline="Get a private market briefing"
              body="Book 20 minutes on Calendly — I'll cover active inventory and sold comps."
              variant="gold"
            />
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                How Dr. Jan helps in Lone Mountain Heights
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                One specialist for buying, selling, and relocating into 89129 —
                with Calendly scheduling and live MLS search.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: HomeIcon,
                  title: "Buy with leverage",
                  desc: "Pre-tour strategy, gated-community comps, and offer structure that protects your downside.",
                  href: "/buyers",
                },
                {
                  icon: Shield,
                  title: "Sell with precision",
                  desc: "Pricing, prep, and marketing tuned for Lone Mountain Heights view premiums and HOA buyers.",
                  href: "/sellers",
                },
                {
                  icon: MapPin,
                  title: "Relocate with a plan",
                  desc: "Neighborhood tours, contractor referrals, and a clear timeline from California or out of state.",
                  href: "/relocation",
                },
              ].map(({ icon: Icon, title, desc, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-[#c9a227]/60 hover:shadow-lg transition-all no-underline"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AgentPortrait size="sm" />
                    <Icon className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </Link>
              ))}
            </div>
            <SectionEngagement />
          </div>
        </section>

        <WhyChooseUs />
        <SectionEngagement
          headline="5.0★ on Realtor.com — talk to Dr. Jan next"
          body="Verified client results. Book a showing or valuation without filling out a form."
          variant="light"
        />
        <ReviewsSection />

        {/* NAP / Local SEO block */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <AgentPortrait size="lg" />
                  <div>
                    <h2
                      className="text-3xl font-semibold text-slate-900"
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                      }}
                    >
                      {BRAND.name}
                    </h2>
                    <p className="text-[#c9a227] font-medium tracking-wide uppercase text-xs">
                      {BRAND.subscript}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">
                  {AGENT.name}, {AGENT.title} · License {AGENT.license}
                  <br />
                  {AGENT.brokerage}
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Address:</strong> {OFFICE.full}
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={AGENT.phoneTel}
                    className="text-[#1e3a8a] font-semibold"
                  >
                    {AGENT.phone}
                  </a>
                </p>
                <p className="text-slate-700 mb-6">
                  <strong>Hours:</strong> 7 days a week, 9am–6pm
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={AGENT.phoneTel}
                    className="inline-flex items-center bg-[#1e3a8a] text-white px-5 py-3 rounded-md font-semibold no-underline hover:bg-[#1e40af]"
                  >
                    Call
                  </a>
                  <a
                    href={OFFICE.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-slate-300 px-5 py-3 rounded-md font-semibold no-underline hover:bg-slate-50"
                  >
                    Directions
                  </a>
                  <a
                    href={OFFICE.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-slate-300 px-5 py-3 rounded-md font-semibold no-underline hover:bg-slate-50"
                  >
                    View Google Reviews
                  </a>
                  <a
                    href={REALSCOUT.portal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-slate-300 px-5 py-3 rounded-md font-semibold no-underline hover:bg-slate-50"
                  >
                    Search MLS
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 h-[320px]">
                <iframe
                  title="Berkshire Hathaway HomeServices Nevada Properties map"
                  src="https://www.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <AeoAnswerBlock />

        <FAQSection
          faqs={[...commonFAQs.general]}
          title="Lone Mountain Heights FAQs"
          subtitle="Answers buyers and sellers ask about this gated Northwest Las Vegas community"
        />

        <CalendlyScheduleSection />
      </main>
      <Footer />
    </>
  );
}
