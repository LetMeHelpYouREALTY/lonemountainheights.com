/**
 * Answer Engine Optimization (AEO) + GEO helpers for Lone Mountain Heights.
 * Clear, citation-ready answers for AI overviews and local entity queries.
 */

import { AGENT, BRAND, LONE_MOUNTAIN_HEIGHTS, OFFICE } from "@/lib/brand";

export const aeoAnswers = [
  {
    question: "What is Lone Mountain Heights?",
    answer:
      "Lone Mountain Heights is a gated residential community in Northwest Las Vegas ZIP 89129, near Lone Mountain Regional Park. Homes typically list in the mid-$600Ks to $700Ks+, with an estimated community median near $749,900.",
  },
  {
    question: "Where is Lone Mountain Heights located?",
    answer:
      "Lone Mountain Heights is in Northwest Las Vegas, Nevada 89129, with trail access near Lone Mountain and freeway connections via US-95.",
  },
  {
    question: "Who is the best realtor for Lone Mountain Heights?",
    answer: `${AGENT.name} with ${AGENT.brokerage} specializes in Lone Mountain Heights and the 89129 corridor. Call ${AGENT.phone} or book a showing on Calendly. License ${AGENT.license}.`,
  },
  {
    question: "Is Lone Mountain Heights a gated community?",
    answer:
      "Yes. Lone Mountain Heights is a gated Northwest Las Vegas community known for larger single-family homes, cul-de-sac privacy, and proximity to Lone Mountain hiking.",
  },
  {
    question: "How do I tour homes in Lone Mountain Heights?",
    answer: `Book a private showing with ${AGENT.name} on Calendly or call ${AGENT.phone}. There are no website forms — scheduling is direct.`,
  },
] as const;

/** SpeakableSchema content selectors for Google Assistant / answer engines */
export function generateSpeakableSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${BRAND.name} Homes for Sale`,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aeo-answer", ".aeo-summary", "h1"],
    },
    about: {
      "@type": "Place",
      name: LONE_MOUNTAIN_HEIGHTS.community,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: LONE_MOUNTAIN_HEIGHTS.zip,
        addressCountry: "US",
      },
    },
  };
}

export function generateLoneMountainPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${BRAND.url}/neighborhoods/lone-mountain-heights#place`,
    name: "Lone Mountain Heights",
    alternateName: [
      "Lone Mountain Heights Las Vegas",
      "Lone Mountain Heights 89129",
    ],
    description: BRAND.description,
    url: `${BRAND.url}/neighborhoods/lone-mountain-heights`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89129",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
      addressRegion: "NV",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2365,
      longitude: -115.2825,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Community type",
        value: "Gated single-family",
      },
      {
        "@type": "PropertyValue",
        name: "Estimated median list price",
        value: LONE_MOUNTAIN_HEIGHTS.medianListEstimate,
      },
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${BRAND.url}#business`,
    name: BRAND.fullName,
    alternateName: [BRAND.name, AGENT.name, "Lone Mountain Heights Homes"],
    image: `${BRAND.url}${AGENT.portrait}`,
    logo: `${BRAND.url}${AGENT.portrait}`,
    url: BRAND.url,
    telephone: AGENT.phoneTel.replace("tel:", ""),
    email: AGENT.email,
    priceRange: "$$$",
    description: BRAND.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE.street,
      addressLocality: OFFICE.city,
      addressRegion: OFFICE.state,
      postalCode: OFFICE.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: OFFICE.lat,
      longitude: OFFICE.lng,
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Lone Mountain Heights",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89129",
        },
      },
      { "@type": "PostalCode", name: "89129", postalCode: "89129" },
      { "@type": "City", name: "Las Vegas" },
      { "@type": "City", name: "North Las Vegas" },
      { "@type": "Place", name: "Centennial Hills" },
      { "@type": "Place", name: "Skye Canyon" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    employee: {
      "@type": "Person",
      name: AGENT.name,
      jobTitle: AGENT.title,
      telephone: AGENT.phoneTel.replace("tel:", ""),
      image: `${BRAND.url}${AGENT.portrait}`,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        identifier: AGENT.license,
      },
    },
    knowsAbout: [
      "Lone Mountain Heights real estate",
      "89129 homes for sale",
      "Northwest Las Vegas gated communities",
      "Las Vegas luxury homes",
      "California to Las Vegas relocation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lone Mountain Heights Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Buyer representation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Seller representation" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private gated-community tours",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Home valuation / CMA" },
        },
      ],
    },
  };
}
