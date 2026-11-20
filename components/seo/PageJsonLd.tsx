import SchemaScript from "@/components/SchemaScript";
import {
  aeoAnswers,
  generateLocalBusinessSchema,
  generateLoneMountainPlaceSchema,
  generateSpeakableSchema,
} from "@/lib/aeo";
import { BRAND } from "@/lib/brand";

type PageJsonLdProps = {
  path?: string;
  title?: string;
  includePlace?: boolean;
  includeFaqs?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
};

/**
 * Sitewide SEO / GEO / AEO JSON-LD bundle for page-level entity clarity.
 */
export default function PageJsonLd({
  path = "/",
  title = BRAND.fullName,
  includePlace = true,
  includeFaqs = true,
  breadcrumbs,
  faqs,
}: PageJsonLdProps) {
  const url = path.startsWith("http") ? path : `${BRAND.url}${path}`;
  const faqItems = faqs ?? [...aeoAnswers];

  const schemas: Record<string, unknown>[] = [
    generateLocalBusinessSchema(),
    generateSpeakableSchema(url),
  ];

  if (includePlace) {
    schemas.push(generateLoneMountainPlaceSchema());
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${BRAND.url}${item.url}`,
      })),
    });
  }

  if (includeFaqs && faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: BRAND.fullName,
      url: BRAND.url,
    },
    about: {
      "@type": "Place",
      name: "Lone Mountain Heights",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BRAND.url}/images/agent/dr-jan-duffy.png`,
    },
  });

  return <SchemaScript schemas={schemas} id="page-seo-geo-aeo" />;
}
