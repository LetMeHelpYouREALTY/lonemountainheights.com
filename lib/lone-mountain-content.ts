import type { FAQ } from "@/components/sections/FAQSection";

export const LONE_MOUNTAIN_SITE_FAQ: FAQ[] = [
  {
    question: "Where is Lone Mountain Heights in Las Vegas?",
    answer:
      "Lone Mountain Heights refers to established neighborhoods along the Lone Mountain corridor in Northwest Las Vegas, primarily in ZIP 89129. The area sits west of US-95 with trail access at Lone Mountain Regional Park and convenient drives to Durango, Centennial Hills, and the 215 beltway.",
  },
  {
    question: "What home styles are common near Lone Mountain?",
    answer:
      "Expect single-family homes with desert landscaping, two-story layouts, three-car garages, and mountain-facing lots on many streets. Inventory ranges from updated resale homes to larger semi-custom builds on premium lots with Strip and mountain sightlines.",
  },
  {
    question: "How do I search Lone Mountain Heights listings?",
    answer:
      "Use the MLS search below this page to filter by price, beds, and map boundaries around Lone Mountain. Dr. Jan Duffy can also set saved searches and private tours for Northwest Las Vegas homes that match your timeline.",
  },
  {
    question: "Does Dr. Jan Duffy charge buyers in Nevada?",
    answer:
      "Buyer representation is typically paid from the seller side under Nevada MLS practice. Schedule a consultation to talk through your price range, lender readiness, and which Northwest Las Vegas pockets fit your commute and lifestyle goals.",
  },
];

export function buildFaqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const LONE_MOUNTAIN_MARKET_STATS = [
  { value: "$495K", label: "NW Las Vegas Median", sub: "Centennial Hills corridor" },
  { value: "26", label: "Avg Days on Market", sub: "" },
  { value: "89129", label: "Primary ZIP", sub: "Lone Mountain area" },
  { value: "2.0", label: "Months Inventory", sub: "Las Vegas metro" },
] as const;