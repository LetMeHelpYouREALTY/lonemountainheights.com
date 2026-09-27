import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { AmenityMap } from "@/components/amenities/AmenityMap";
import { StaticAmenityList } from "@/components/amenities/StaticAmenityList";
import { getCommunityAmenityConfig, getSiteOrigin } from "@/lib/amenities";
import { buildAmenitiesPageSchema } from "@/lib/amenities/build-amenities-schema";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = headers().get("x-domain") || "";
  const config = getCommunityAmenityConfig(hostname);
  if (!config) {
    return {
      title: "Nearby Amenities | Dr. Jan Duffy",
      robots: { index: false, follow: false },
    };
  }

  const origin = getSiteOrigin(hostname);
  const title = `Nearby Amenities in ${config.communityName}, ${config.city} | Dr. Jan Duffy`;
  const description = `Interactive map and local guide to restaurants, parks, grocery, healthcare, schools, and shopping near ${config.communityName} in ${config.city}, NV. Dr. Jan Duffy, Berkshire Hathaway HomeServices.`;
  const canonical = `${origin}/amenities`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function AmenitiesPage() {
  const hostname = headers().get("x-domain") || "";
  const config = getCommunityAmenityConfig(hostname);
  if (!config) {
    notFound();
  }

  const origin = getSiteOrigin(hostname);
  const pageUrl = `${origin}/amenities`;
  const schemaBlocks = buildAmenitiesPageSchema(config, pageUrl);

  return (
    <>
      {schemaBlocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <Navbar />
      <main>
        <section className="bg-slate-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nearby Amenities in {config.communityName}, {config.city}
            </h1>
            <p className="text-lg text-white/80">
              Hyperlocal map and guide to dining, recreation, errands, and healthcare around{" "}
              {config.communityName} in Northwest Las Vegas — curated by Dr. Jan Duffy.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Interactive amenity map</h2>
            <AmenityMap config={config} />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Living in {config.communityName}</h2>
            <div className="space-y-10">
              {config.writtenSections.map((section) => (
                <article key={section.id}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{section.title}</h3>
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-slate-700 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{config.commute.title}</h2>
            <ul className="space-y-4">
              {config.commute.items.map((item) => (
                <li
                  key={item.destination}
                  className="rounded-lg border border-slate-200 p-4 bg-slate-50"
                >
                  <p className="font-semibold text-slate-900">{item.destination}</p>
                  <p className="text-slate-600 text-sm mt-1">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50" aria-labelledby="amenities-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="amenities-faq-heading" className="text-2xl font-bold text-slate-900 mb-8">
              {config.communityName} amenities — frequently asked questions
            </h2>
            <div className="space-y-6">
              {config.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-white border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured places (full list)</h2>
            <StaticAmenityList config={config} showAllCategories />
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Your {config.communityName} real estate expert
            </h2>
            <p className="text-blue-100 mb-8">
              Dr. Jan Duffy knows Northwest Las Vegas neighborhoods block by block. Whether you are
              buying or selling in {config.communityName}, get guidance backed by Berkshire Hathaway
              HomeServices Nevada Properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" aria-hidden />
                Call 702-222-1964
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
            <p className="mt-2 text-blue-200 text-sm">
              9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
