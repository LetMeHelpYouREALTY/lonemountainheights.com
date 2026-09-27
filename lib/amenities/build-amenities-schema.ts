import type { CommunityAmenityConfig } from "./types";

export function buildAmenitiesPageSchema(
  config: CommunityAmenityConfig,
  pageUrl: string
): Record<string, unknown>[] {
  const agentId = `${pageUrl}#agent`;

  const realEstateAgent = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": agentId,
    name: "Dr. Jan Duffy",
    jobTitle: "REALTOR®",
    telephone: "+1-702-222-1964",
    email: "homes@heyberkshire.com",
    identifier: "S.0197614.LLC",
    worksFor: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    areaServed: {
      "@type": "Place",
      name: `${config.communityName}, ${config.city}, ${config.state}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: config.center.lat,
        longitude: config.center.lng,
      },
    },
    url: pageUrl,
  };

  const communityPlace = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: config.communityName,
    address: {
      "@type": "PostalAddress",
      addressLocality: config.city,
      addressRegion: config.state,
      postalCode: config.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.center.lat,
      longitude: config.center.lng,
    },
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured places near ${config.communityName}`,
    itemListElement: config.curatedPlaces.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: place.address,
      },
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl.replace(/\/amenities\/?$/, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nearby Amenities",
        item: pageUrl,
      },
    ],
  };

  return [realEstateAgent, communityPlace, itemList, faqPage, breadcrumbs];
}
