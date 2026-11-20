import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import DomainRealScoutListings from "@/components/realscout/DomainRealScoutListings";
import RealScoutSimpleSearch from "@/components/realscout/RealScoutSimpleSearch";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mountain,
  Home as HomeIcon,
  MapPin,
  Car,
  Clock,
  Trees,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { calendlyUrl } from "@/lib/calendly";
import {
  LMH_AMENITIES,
  LMH_COMMUTES,
  LMH_FAQS,
  LMH_GEO,
  LMH_MARKET,
  LMH_NAP,
  LMH_SCHOOLS,
  LMH_SUBDIVISIONS,
  lmhFaqSchemaMainEntity,
} from "@/lib/loneMountainHeightsContent";

export const metadata: Metadata = {
  title:
    "Lone Mountain Heights Homes for Sale (89129) | Complete Guide | Dr. Jan Duffy",
  description: `Lone Mountain Heights Las Vegas guide: ${LMH_MARKET.avgSold6MoFormatted} avg sold (${LMH_MARKET.asOf}), elevated lots, mountain views, ZIPs ${LMH_GEO.primaryZips.join(" / ")}. Tour with Dr. Jan Duffy — call ${LMH_NAP.phoneDisplay}.`,
  keywords: [
    "Lone Mountain Heights homes for sale",
    "Lone Mountain Heights Las Vegas",
    "89129 homes for sale",
    "89130 real estate",
    "Lone Mountain mountain view homes",
    "Northwest Las Vegas luxury homes",
    "Lone Mountain Heights vs Centennial Hills",
  ],
  alternates: {
    canonical: "https://lonemountainheights.com/neighborhoods/lone-mountain-heights",
  },
  openGraph: {
    title: "Lone Mountain Heights Homes for Sale | Definitive Local Guide",
    description:
      "Dated market snapshot, commute times, amenities, and private tours with Dr. Jan Duffy.",
    images: ["/images/hero/lone-mountain-luxury-interior.jpg"],
    url: "https://lonemountainheights.com/neighborhoods/lone-mountain-heights",
  },
};

const siteUrl = "https://lonemountainheights.com";

export default async function LoneMountainHeightsPage() {
  const config = await getPageDomainConfig();
  const scheduleUrl = calendlyUrl(config.domain, "buyer", "lmh-guide", "inline");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lmhFaqSchemaMainEntity(),
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${siteUrl}/neighborhoods/lone-mountain-heights#place`,
    name: LMH_GEO.name,
    description:
      "Northwest Las Vegas community known for elevated lots, Lone Mountain views, and spacious single-family homes near US-95 and the 215 Beltway.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: LMH_GEO.primaryZips[0],
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LMH_GEO.latitude,
      longitude: LMH_GEO.longitude,
    },
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Buy a Home in Lone Mountain Heights",
    description:
      "Steps to purchase a Lone Mountain Heights home with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties.",
    totalTime: "P45D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Search live MLS listings",
        text: "Use the RealScout search on this page to filter Lone Mountain Heights and Northwest Las Vegas homes by price, beds, and baths.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Tour with street-level comps",
        text: `Book a showing on Calendly or call ${LMH_NAP.phoneDisplay}. Compare elevation, view orientation, and recent sales on the same corridor.`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Write a competitive offer",
        text: "Dr. Jan Duffy prepares comps and negotiation strategy from current Lone Mountain MLS data — not Zestimates alone.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Close with local representation",
        text: `Inspections, title, and closing coordinated through ${LMH_NAP.brokerage}, License ${LMH_NAP.license}.`,
      },
    ],
  };

  const agentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteUrl}#organization`,
    name: `${LMH_NAP.agentName} - ${LMH_NAP.brokerage}`,
    telephone: LMH_NAP.phoneTel.replace("tel:", ""),
    email: LMH_NAP.email,
    url: siteUrl,
    image: `${siteUrl}/images/agent/dr-jan-duffy-portrait.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: LMH_NAP.street,
      addressLocality: LMH_NAP.city,
      addressRegion: LMH_NAP.state,
      postalCode: LMH_NAP.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@id": `${siteUrl}/neighborhoods/lone-mountain-heights#place`,
    },
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/neighborhoods/lone-mountain-heights#webpage`,
    name: "Lone Mountain Heights Homes for Sale — Complete Guide",
    url: `${siteUrl}/neighborhoods/lone-mountain-heights`,
    dateModified: "2026-11-20",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".speakable-summary", ".aeo-answer"],
    },
    mainEntity: {
      "@id": `${siteUrl}/neighborhoods/lone-mountain-heights#place`,
    },
    about: { "@id": `${siteUrl}#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Neighborhoods",
        item: `${siteUrl}/neighborhoods`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Lone Mountain Heights",
        item: `${siteUrl}/neighborhoods/lone-mountain-heights`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-900 pb-16 pt-28 text-white md:pb-20 md:pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/images/hero/lone-mountain-luxury-interior.jpg')" }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <nav className="mb-6 text-sm text-slate-300" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-white">
                Neighborhoods
              </Link>
              {" / "}
              <span className="text-white">Lone Mountain Heights</span>
            </nav>
            <div className="mb-6 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
              {LMH_NAP.brokerage}
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Lone Mountain Heights Homes for Sale
            </h1>
            <p className="speakable-summary mx-auto max-w-3xl text-xl text-white/85">
              Elevated lots and Lone Mountain views in Northwest Las Vegas (ZIPs{" "}
              {LMH_GEO.primaryZips.join(" / ")}). {LMH_MARKET.avgSold6MoFormatted} average sold as of{" "}
              {LMH_MARKET.asOf} — private tours with {LMH_NAP.agentName}.
            </p>
          </div>
        </section>

        <RealScoutSimpleSearch
          config={config}
          title="Search Lone Mountain Heights Listings"
          subtitle="Live MLS — filter Northwest Las Vegas homes by price and features"
        />

        <DomainRealScoutListings />

        <div className="container mx-auto px-4 py-16">
          {/* Answer-first overview */}
          <section className="mx-auto mb-16 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              What is Lone Mountain Heights?
            </h2>
            <p className="aeo-answer text-lg leading-relaxed text-slate-800">
              Lone Mountain Heights is the elevated-view pocket of Northwest Las Vegas beneath the
              Lone Mountain ridgeline — primarily ZIPs {LMH_GEO.primaryZips.join(" and ")} — where
              buyers trade denser valley tracts for larger pads, multi-car garages, and sightlines
              toward the mountain and Spring Mountains.
            </p>
            <div className="prose prose-lg mt-6 max-w-none text-slate-700">
              <p>
                It sits between the Centennial Hills corridor and Summerlin, with US-95 and the 215
                Beltway carrying most Strip, airport, and west-valley trips. Inventory is mostly
                single-family product; typical tours include {LMH_MARKET.typicalBeds} and{" "}
                {LMH_MARKET.typicalSqFt.toLowerCase()}.
              </p>
              <p>
                {LMH_NAP.agentName} at {LMH_NAP.brokerage} (License {LMH_NAP.license}) helps buyers
                and sellers compare elevation bands and recent closed sales — not just list price —
                before writing an offer.
              </p>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mx-auto mb-16 max-w-5xl rounded-2xl bg-slate-900 p-8 text-white md:p-12">
            <h2 className="mb-2 text-center text-2xl font-bold">
              Lone Mountain Market | {LMH_MARKET.asOf}
            </h2>
            <p className="mb-8 text-center text-sm text-slate-400">{LMH_MARKET.asOfLabel}</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: LMH_MARKET.avgSold6MoFormatted, label: "Avg Sold (6 mo)" },
                { value: LMH_MARKET.avgActiveListFormatted, label: "Avg Active List" },
                { value: `${LMH_MARKET.avgDaysOnMarketSold} days`, label: "Avg DOM (Sold)" },
                { value: `${LMH_MARKET.monthsInventory} mo`, label: "Inventory" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{value}</div>
                  <div className="mt-1 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              Sold-to-list pace ~{LMH_MARKET.soldToListRatio6Mo} over six months.{" "}
              {LMH_MARKET.inventoryNote}. {LMH_MARKET.priceBandNote}
            </p>
          </section>

          {/* Commutes + amenities */}
          <section className="mx-auto mb-16 grid max-w-5xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Commute times</h2>
              <p className="aeo-answer mb-4 text-slate-800">
                From Lone Mountain Heights, Downtown Summerlin is about 15 minutes, the Strip about
                20–25 minutes via US-95, and Harry Reid Airport about 30 minutes in typical traffic.
              </p>
              <ul className="space-y-3">
                {LMH_COMMUTES.map((row) => (
                  <li
                    key={row.place}
                    className="flex items-center justify-between border-b border-slate-200 py-2 text-slate-700"
                  >
                    <span className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-blue-600" />
                      {row.place}
                    </span>
                    <span className="font-semibold text-slate-900">{row.minutes}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Nearby amenities</h2>
              <p className="aeo-answer mb-4 text-slate-800">
                Parks and trails at Lone Mountain, plus Centennial Center shopping (Costco, Target,
                Walmart) and 215 Beltway access for Summerlin dining and employment centers.
              </p>
              <ul className="space-y-4">
                {LMH_AMENITIES.map((item) => (
                  <li key={item.name} className="flex gap-3">
                    <Trees className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-900">{item.name}</div>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Subdivisions */}
          <section className="mx-auto mb-16 max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              How inventory differs inside Lone Mountain Heights
            </h2>
            <p className="aeo-answer mb-6 text-lg text-slate-800">
              Lone Mountain Heights is not one uniform product — elevation, view corridor, lot size,
              and HOA rules change by street. Tour view pads and nearby Ranch / Desert Vista pockets
              in the same weekend before locking a price strategy.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {LMH_SUBDIVISIONS.map((sub) => (
                <div key={sub.name} className="border-t-4 border-blue-600 bg-slate-50 p-5">
                  <Building2 className="mb-3 h-6 w-6 text-blue-600" />
                  <h3 className="mb-2 font-bold text-slate-900">{sub.name}</h3>
                  <p className="text-sm text-slate-600">{sub.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Schools — names only */}
          <section className="mx-auto mb-16 max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Schools serving the Lone Mountain / 89129 area
            </h2>
            <p className="aeo-answer mb-4 text-slate-800">
              Street-level CCSD assignments in the Lone Mountain Heights area often include Eileen
              Conners Elementary, Marshall Elementary, and Centennial High School feeders — verify
              every address at ccsd.net before you write an offer.
            </p>
            <ul className="list-inside list-disc space-y-2 text-slate-700">
              {LMH_SCHOOLS.map((school) => (
                <li key={school}>{school}</li>
              ))}
            </ul>
          </section>

          {/* Quick facts strip */}
          <section className="mx-auto mb-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, title: "Mountain Views", desc: "Elevated lots toward Lone Mountain" },
              { icon: HomeIcon, title: "Spacious Plans", desc: LMH_MARKET.typicalSqFt },
              { icon: MapPin, title: `ZIPs ${LMH_GEO.primaryZips.join(" / ")}`, desc: LMH_GEO.region },
              { icon: Clock, title: `${LMH_MARKET.avgDaysOnMarketSold}-day DOM`, desc: LMH_MARKET.asOf },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </section>

          {/* Agent band */}
          <section className="mx-auto mb-16 flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-slate-50 p-8 md:flex-row">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow">
              <Image
                src="/images/agent/dr-jan-duffy-portrait.jpg"
                alt={`${LMH_NAP.agentName} portrait — Lone Mountain Heights realtor`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-900">
                Work With {LMH_NAP.agentName}
              </h2>
              <p className="mt-2 text-slate-600">
                {LMH_NAP.brokerage} · License {LMH_NAP.license}
                <br />
                {LMH_NAP.fullAddress}
              </p>
              <a
                href={LMH_NAP.phoneTel}
                className="mt-4 inline-flex items-center font-semibold text-blue-600 hover:underline"
              >
                <Phone className="mr-2 h-5 w-5" />
                {LMH_NAP.phoneDisplay}
              </a>
            </div>
          </section>

          {/* AEO FAQ — answer first under each H2-style question */}
          <section className="mx-auto mb-16 max-w-3xl" id="faq">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Lone Mountain Heights FAQs
            </h2>
            <div className="space-y-10">
              {LMH_FAQS.map((faq) => (
                <article key={faq.question}>
                  <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
                  <p className="aeo-answer mt-3 text-lg leading-relaxed text-slate-800">
                    {faq.shortAnswer}
                  </p>
                  <p className="mt-3 text-slate-600">{faq.longAnswer}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Internal links for topical SEO */}
          <section className="mx-auto mb-16 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Related guides</h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <Link href="/neighborhoods/centennial-hills" className="hover:underline">
                  Centennial Hills homes for sale
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/skye-canyon" className="hover:underline">
                  Skye Canyon homes (north of Lone Mountain)
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/summerlin" className="hover:underline">
                  Summerlin real estate guide
                </Link>
              </li>
              <li>
                <Link href="/luxury-homes" className="hover:underline">
                  Las Vegas luxury homes $1M+
                </Link>
              </li>
              <li>
                <Link href="/market-report" className="hover:underline">
                  Las Vegas market report
                </Link>
              </li>
              <li>
                <Link href="/google-business" className="hover:underline">
                  Google Business Profile / NAP
                </Link>
              </li>
            </ul>
          </section>

          <section className="mx-auto mb-16 max-w-3xl" id="schedule">
            <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">
              Schedule a Private Tour
            </h2>
            <CalendlyWidget url={scheduleUrl} height="700px" />
          </section>
        </div>

        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Buy in Lone Mountain Heights?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Call {LMH_NAP.agentName} at {LMH_NAP.phoneDisplay} or book on Calendly for same-week
              private showings.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={LMH_NAP.phoneTel}
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 hover:bg-blue-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                {LMH_NAP.phoneDisplay}
              </a>
              <Link
                href="#schedule"
                className="inline-block rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white hover:bg-blue-800"
              >
                Book on Calendly
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              {LMH_NAP.fullAddress} · {LMH_NAP.phoneDisplay} · License {LMH_NAP.license}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
