import Navbar from "@/components/layouts/Navbar";
import RealScoutSimpleSearch from "@/components/realscout/RealScoutSimpleSearch";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { HomeFAQBlock } from "@/components/home/HomeFAQBlock";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone, Home as HomeIcon, TrendingUp, Shield, Users, Calendar } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { homePageJsonLd } from "@/lib/home-schema";
import { jsonLdString } from "@/lib/json-ld";
import { calendlyUrl } from "@/lib/calendly";
import { CLIENT_PHONE_DISPLAY, CLIENT_PHONE_TEL } from "@/lib/domain-site";
import { AgentPortrait } from "@/components/brand/AgentPortrait";

export default async function Home() {
  const config = await getPageDomainConfig();
  const schemas = homePageJsonLd(config);
  const isLoneMountain = config.domain === "lonemountainheights.com";
  const buyerCalendly = calendlyUrl(config.domain, "buyer", "hero", "home");
  const sellerCalendly = calendlyUrl(config.domain, "seller", "hero", "home-valuation");

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
        />
      ))}
      <Navbar />
      <main>
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr,minmax(220px,320px)] gap-10 items-center">
              <div className="text-center lg:text-left">
                {config.ctaBadge && (
                  <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                    {config.ctaBadge}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {config.heroHeadline}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                  {config.heroSubheadline}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <a
                    href={buyerCalendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <Calendar className="h-5 w-5" />
                    Book a buyer consultation
                  </a>
                  <a
                    href={sellerCalendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-colors"
                  >
                    Listing consultation
                  </a>
                  <a
                    href={CLIENT_PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-100 font-semibold px-7 py-3 rounded-md hover:bg-blue-950 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call {CLIENT_PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/80 text-sm">
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
              {isLoneMountain && (
                <div className="hidden lg:block">
                  <AgentPortrait priority className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20" />
                </div>
              )}
            </div>
          </div>
        </section>

        <RealScoutSimpleSearch
          config={config}
          title={isLoneMountain ? "Search Lone Mountain Heights MLS listings" : undefined}
        />
        <RealScoutListings config={config} />

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — trusted guidance for{" "}
                {config.neighborhood} buyers and sellers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Trusted Brand", desc: "BHHS Nevada Properties — integrity and global referrals" },
                { icon: Users, title: "50K+ Network", desc: "Referral coverage for moves in and out of Las Vegas" },
                { icon: TrendingUp, title: "Local expertise", desc: `Focused knowledge of ${config.neighborhood} and nearby NW Las Vegas` },
                { icon: HomeIcon, title: "Full Service", desc: "Buying, selling, luxury homes, and private showings" },
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

        {isLoneMountain && (
          <section className="py-14 bg-slate-900 text-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Lone Mountain Heights at a glance</h2>
              <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
                The Heights sits on the Lone Mountain ridgeline in Northwest Las Vegas (89129), known for custom
                architecture, larger lots, and views toward the Spring Mountains and the valley floor.
              </p>
              <dl className="grid sm:grid-cols-3 gap-6 text-center text-sm">
                <div className="bg-slate-800/60 rounded-xl p-5">
                  <dt className="text-blue-300 font-semibold mb-1">Area</dt>
                  <dd className="text-white">Northwest Las Vegas · 89129</dd>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-5">
                  <dt className="text-blue-300 font-semibold mb-1">Inventory focus</dt>
                  <dd className="text-white">Custom & semi-custom luxury SFR</dd>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-5">
                  <dt className="text-blue-300 font-semibold mb-1">Schedule tours</dt>
                  <dd>
                    <a href={buyerCalendly} className="text-blue-300 hover:underline font-medium">
                      Book online
                    </a>{" "}
                    or {CLIENT_PHONE_DISPLAY}
                  </dd>
                </div>
              </dl>
              <p className="text-center mt-8">
                <Link
                  href="/neighborhoods/lone-mountain-heights"
                  className="text-blue-300 hover:text-white font-medium underline"
                >
                  Full Lone Mountain Heights neighborhood guide
                </Link>
              </p>
            </div>
          </section>
        )}

        <WhyChooseUs />
        <ReviewsSection />
        <HomeFAQBlock config={config} />

        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.ctaHeadline}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{config.ctaSubheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={buyerCalendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule on Calendly
              </a>
              <a
                href={CLIENT_PHONE_TEL}
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {CLIENT_PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties ·{" "}
              <Link href="/contact" className="underline hover:text-white">
                Contact & directions
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}