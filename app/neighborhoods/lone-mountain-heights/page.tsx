import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import DomainRealScoutListings from "@/components/realscout/DomainRealScoutListings";
import { BhhsNevadaLogo } from "@/components/brand/BhhsNevadaLogo";
import Link from "next/link";
import { Phone, MapPin, Mountain, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { calendlyUrl } from "@/lib/calendly";
import { CLIENT_PHONE_DISPLAY, CLIENT_PHONE_TEL, LONE_MOUNTAIN_HEIGHTS_GEO, officePostalAddress } from "@/lib/domain-site";
import { faqJsonLd, faqsForDomain } from "@/lib/domain-faqs";
import { jsonLdString } from "@/lib/json-ld";
import { BROKERAGE_NAME } from "@/lib/brokerage";
import FAQSection, { defaultFaqs } from "@/components/sections/FAQSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lone Mountain Heights Luxury Homes | Northwest Las Vegas 89129",
    description:
      "Lone Mountain Heights luxury homes for sale on the NW Las Vegas ridgeline (89129). Custom estates, mountain views, Dr. Jan Duffy, REALTOR® · 702-222-1964.",
    alternates: { canonical: "https://lonemountainheights.com/neighborhoods/lone-mountain-heights" },
    keywords: [
      "Lone Mountain Heights homes for sale",
      "Lone Mountain Heights luxury",
      "89129 real estate",
      "Northwest Las Vegas custom homes",
    ],
  };
}

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Lone Mountain Heights",
  description:
    "Luxury custom-home area on the Lone Mountain ridgeline in Northwest Las Vegas, Nevada (ZIP 89129).",
  geo: {
    "@type": "GeoCoordinates",
    latitude: LONE_MOUNTAIN_HEIGHTS_GEO.latitude,
    longitude: LONE_MOUNTAIN_HEIGHTS_GEO.longitude,
  },
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Clark County",
    containedInPlace: { "@type": "State", name: "Nevada" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lonemountainheights.com/" },
    { "@type": "ListItem", position: 2, name: "Neighborhoods", item: "https://lonemountainheights.com/neighborhoods" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lone Mountain Heights",
      item: "https://lonemountainheights.com/neighborhoods/lone-mountain-heights",
    },
  ],
};

export default async function LoneMountainHeightsPage() {
  const config = await getPageDomainConfig();
  const faqs = faqsForDomain(config) ?? defaultFaqs;
  const buyerCalendly = calendlyUrl(config.domain, "buyer", "neighborhood", "lone-mountain-heights");
  const office = officePostalAddress();
  const mapQuery = `${LONE_MOUNTAIN_HEIGHTS_GEO.latitude},${LONE_MOUNTAIN_HEIGHTS_GEO.longitude}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(faqs)) }} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <nav className="max-w-6xl mx-auto mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            {" / "}
            <Link href="/neighborhoods" className="hover:text-blue-600">
              Neighborhoods
            </Link>
            {" / "}
            <span className="text-slate-900">Lone Mountain Heights</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <BhhsNevadaLogo height={44} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Lone Mountain Heights luxury homes
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Custom and semi-custom estates on the Lone Mountain ridgeline in Northwest Las Vegas
              (89129). Dr. Jan Duffy with {BROKERAGE_NAME} lists, tours, and negotiates Heights
              properties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href={buyerCalendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
              >
                <Calendar className="h-5 w-5" />
                Book a consultation
              </a>
              <a
                href={CLIENT_PHONE_TEL}
                className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Phone className="h-5 w-5" />
                {CLIENT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Mountain className="h-6 w-6 text-blue-600" />
                Location & character
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Lone Mountain Heights sits above the northwest valley floor near Lone Mountain and
                the 89129 ZIP. Lots tend to be larger than in nearby master-planned communities, with
                custom architecture and sightlines toward the Spring Mountains and the Strip
                corridor.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Buyers comparing Skye Canyon or Centennial Hills often choose the Heights for lot
                size, privacy, and estate-style builds — your commute and HOA preferences should drive
                the final call.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Dr. Jan Duffy — NAP</h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <address className="not-italic">
                    {office.streetAddress}
                    <br />
                    {office.addressLocality}, {office.addressRegion} {office.postalCode}
                  </address>
                </li>
                <li>
                  <Phone className="h-5 w-5 text-blue-600 inline mr-2" />
                  <a href={CLIENT_PHONE_TEL} className="font-semibold text-blue-700 hover:underline">
                    {CLIENT_PHONE_DISPLAY}
                  </a>
                </li>
                <li>REALTOR® · License S.0197614.LLC · {BROKERAGE_NAME}</li>
              </ul>
              <div className="mt-4 rounded-lg overflow-hidden border border-slate-200">
                <iframe
                  title="Map near Lone Mountain Heights, Northwest Las Vegas"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=12&output=embed`}
                  className="w-full h-52 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps/dir//${encodeURIComponent(`${office.streetAddress}, ${office.addressLocality}, ${office.addressRegion} ${office.postalCode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
              >
                Get directions to the office
              </a>
            </div>
          </section>

          <FAQSection
            faqs={faqs}
            title="Lone Mountain Heights FAQ"
            subtitle="Answers for buyers and sellers in the Heights (visible text matches FAQPage schema on this page)."
          />
        </div>
        <DomainRealScoutListings />
      </main>
      <Footer />
    </>
  );
}