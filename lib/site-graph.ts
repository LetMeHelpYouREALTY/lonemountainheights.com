import type { DomainConfig } from "./domain-config";
import type { CommunityAmenityConfig } from "./amenities/types";
import type { FAQ } from "@/components/sections/FAQSection";
import {
  AGENT_CLIENT_PHONE_TEL,
  AGENT_LICENSE,
  BROKERAGE_EMAIL,
  BROKERAGE_HENDERSON_OFFICE,
  BROKERAGE_LEGAL_NAME,
  BROKERAGE_MARKETING_URL,
  BROKERAGE_SAME_AS,
  BROKERAGE_CUSTOMER_PHONE_TEL,
} from "./brokerage";

type BuildHomeGraphParams = {
  siteOrigin: string;
  config: DomainConfig;
  faqs?: FAQ[];
  amenityConfig?: CommunityAmenityConfig | null;
};

export function buildHomePageGraph({
  siteOrigin,
  config,
  faqs,
  amenityConfig,
}: BuildHomeGraphParams) {
  const websiteId = `${siteOrigin}/#website`;
  const brokerageId = `${siteOrigin}/#brokerage`;
  const agentId = `${siteOrigin}/#agent`;
  const placeId = `${siteOrigin}/#service-area`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteOrigin,
      name: `${config.neighborhood} Real Estate | Dr. Jan Duffy`,
      description: config.description,
      inLanguage: "en-US",
      publisher: { "@id": brokerageId },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteOrigin}/listings`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": brokerageId,
      name: BROKERAGE_LEGAL_NAME,
      alternateName: ["BHHS Nevada Properties", "BHHSNV"],
      url: BROKERAGE_MARKETING_URL,
      sameAs: [...BROKERAGE_SAME_AS],
      logo: `${siteOrigin}/Image/agent1.jpg`,
      email: BROKERAGE_EMAIL,
      telephone: BROKERAGE_CUSTOMER_PHONE_TEL,
      address: {
        "@type": "PostalAddress",
        streetAddress: BROKERAGE_HENDERSON_OFFICE.street,
        addressLocality: BROKERAGE_HENDERSON_OFFICE.city,
        addressRegion: BROKERAGE_HENDERSON_OFFICE.state,
        postalCode: BROKERAGE_HENDERSON_OFFICE.zip,
        addressCountry: "US",
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": agentId,
      name: "Dr. Jan Duffy",
      jobTitle: "REALTOR®",
      identifier: AGENT_LICENSE,
      url: `${siteOrigin}/about`,
      image: `${siteOrigin}/Image/agent1.jpg`,
      telephone: AGENT_CLIENT_PHONE_TEL,
      email: "homes@heyberkshire.com",
      worksFor: { "@id": brokerageId },
      areaServed: amenityConfig
        ? {
            "@type": "Place",
            "@id": placeId,
            name: `${config.neighborhood}, Las Vegas, NV`,
            address: {
              "@type": "PostalAddress",
              addressLocality: amenityConfig.city,
              addressRegion: amenityConfig.state,
              postalCode: amenityConfig.zip,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: amenityConfig.center.lat,
              longitude: amenityConfig.center.lng,
            },
          }
        : {
            "@type": "City",
            name: config.neighborhood,
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Las Vegas, Nevada",
            },
          },
      knowsAbout: config.keywords,
    },
  ];

  if (amenityConfig) {
    graph.push({
      "@type": "Place",
      "@id": placeId,
      name: config.neighborhood,
      description: `Northwest Las Vegas homes and amenities near ${amenityConfig.communityName}.`,
      address: {
        "@type": "PostalAddress",
        addressLocality: amenityConfig.city,
        addressRegion: amenityConfig.state,
        postalCode: amenityConfig.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: amenityConfig.center.lat,
        longitude: amenityConfig.center.lng,
      },
      containedInPlace: {
        "@type": "City",
        name: "Las Vegas",
        addressRegion: "NV",
      },
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${siteOrigin}/#faq`,
      isPartOf: { "@id": websiteId },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}