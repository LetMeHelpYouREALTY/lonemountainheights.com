/**
 * Lone Mountain Heights hyperlocal content — SEO / GEO / AEO source of truth.
 * Market figures dated November 2026. Verify comps before client offers.
 */

/** NAP aligned with lib/domain-site.ts (site-wide production source of truth). */
export const LMH_NAP = {
  agentName: "Dr. Jan Duffy",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  phoneDisplay: "702-222-1964",
  phoneTel: "tel:+17022221964",
  email: "homes@heyberkshire.com",
  license: "S.0197614.LLC",
  street: "7475 W Sahara Ave, Suite 100",
  city: "Las Vegas",
  state: "NV",
  zip: "89117",
  fullAddress: "7475 W Sahara Ave, Suite 100, Las Vegas, NV 89117",
} as const;

export const LMH_GEO = {
  name: "Lone Mountain Heights",
  primaryZips: ["89129", "89130"] as const,
  areaZips: ["89129", "89130", "89131", "89149"] as const,
  latitude: 36.2497,
  longitude: -115.2801,
  region: "Northwest Las Vegas",
  landmarks: [
    "Lone Mountain geological formation",
    "US-95",
    "215 Beltway",
    "Centennial Hills corridor",
    "Downtown Summerlin (approx. 15 minutes)",
  ],
} as const;

/** Market snapshot — Lone Mountain / NW Las Vegas area, November 2026 */
export const LMH_MARKET = {
  asOf: "November 2026",
  asOfLabel: "November 19, 2026 market snapshot",
  avgSold6Mo: 754000,
  avgSold6MoFormatted: "~$754,000",
  avgActiveList: 915000,
  avgActiveListFormatted: "~$915,000",
  avgDaysOnMarketSold: 50,
  monthsInventory: 5.5,
  inventoryNote: "Roughly balanced (neither clear buyer nor seller market)",
  soldToListRatio6Mo: "97.7%",
  typicalHomeTypes: "Single-family homes on larger or elevated lots",
  typicalBeds: "3–5 bedrooms",
  typicalSqFt: "Often 1,600–4,400+ sq ft depending on subdivision and era",
  priceBandNote:
    "Individual sales range from the mid-$300Ks into $1.5M+ for larger view estates — always pull current MLS comps.",
} as const;

export const LMH_COMMUTES = [
  { place: "Downtown Summerlin", minutes: "≈15 min" },
  { place: "Las Vegas Strip", minutes: "≈20–25 min via US-95" },
  { place: "Mount Charleston access", minutes: "≈15 min" },
  { place: "Harry Reid International Airport", minutes: "≈30 min" },
  { place: "Centennial Hills / Centennial Center", minutes: "≈5–10 min" },
] as const;

export const LMH_AMENITIES = [
  {
    name: "Lone Mountain Summit Trail & Discovery Park area",
    detail: "Hiking and open space at the Lone Mountain ridgeline north of the Heights.",
  },
  {
    name: "Majestic Park & Trigono Hills Park",
    detail: "Neighborhood parks within a short drive for outdoor recreation.",
  },
  {
    name: "Centennial Center",
    detail: "Costco, Target, Walmart, and dining along the Centennial Hills retail corridor.",
  },
  {
    name: "215 Beltway & Summerlin Parkway",
    detail: "Primary west-valley freeways for Strip, airport, and Summerlin trips.",
  },
] as const;

export const LMH_SUBDIVISIONS = [
  {
    name: "View-oriented elevated lots",
    detail:
      "Higher pads with sightlines to Lone Mountain and, on some streets, Spring Mountains or valley lights. View orientation often drives a measurable price premium.",
  },
  {
    name: "Lone Mountain Ranch area",
    detail:
      "Part of the broader Lone Mountain footprint buyers compare when shopping 89129 — lot size and HOA rules vary by street.",
  },
  {
    name: "Desert Vista Estates and nearby pockets",
    detail:
      "Adjacent inventory buyers tour alongside Heights listings; compare lot size, elevation, and HOA before narrowing to one subdivision.",
  },
] as const;

/** Named schools only — no quality ratings or “good schools” proxies (Fair Housing). */
export const LMH_SCHOOLS = [
  "Eileen Conners Elementary (verify street assignment)",
  "Marshall Elementary (verify street assignment)",
  "Centennial High School feeder (verify street assignment)",
] as const;

export type LmhFaq = {
  question: string;
  /** 40–60 word answer-first block for AEO / speakable */
  shortAnswer: string;
  longAnswer: string;
};

export const LMH_FAQS: LmhFaq[] = [
  {
    question: "What is the average home price in Lone Mountain Heights?",
    shortAnswer:
      "As of November 2026, Lone Mountain area homes sold for about $754,000 on average over the prior six months, while active listings averaged near $915,000. Prices swing with lot elevation, square footage, and mountain-view orientation.",
    longAnswer:
      "Use those averages only as a starting point. Mid-$300K listings still appear on smaller or older inventory, while larger view estates can clear $1M–$1.5M+. Before any offer, Dr. Jan Duffy pulls current MLS comps for the exact street and elevation band.",
  },
  {
    question: "Where is Lone Mountain Heights in Las Vegas?",
    shortAnswer:
      "Lone Mountain Heights sits in Northwest Las Vegas below the Lone Mountain ridgeline, primarily in ZIP codes 89129 and 89130, between the Centennial Hills corridor and Summerlin with US-95 and 215 Beltway access.",
    longAnswer:
      "Buyers often map it as the elevated-view pocket of the broader Lone Mountain area. Downtown Summerlin is roughly 15 minutes; the Strip is typically 20–25 minutes via US-95. Exact drive times depend on the street and traffic.",
  },
  {
    question: "What makes Lone Mountain Heights different from Centennial Hills?",
    shortAnswer:
      "Lone Mountain Heights is known for elevated lots and direct Lone Mountain views; Centennial Hills is a larger master-planned retail and housing corridor immediately north. Inventory count, lot feel, and view premiums differ street by street.",
    longAnswer:
      "Many buyers tour both in one weekend. Heights shoppers often prioritize view pads and larger-lot feel; Centennial Hills shoppers often prioritize newer tracts and Centennial Center convenience. Dr. Jan Duffy builds side-by-side comps so you are not comparing dissimilar product.",
  },
  {
    question: "How long do Lone Mountain homes stay on the market?",
    shortAnswer:
      "Sold Lone Mountain area homes in the November 2026 snapshot averaged about 50 days on market, with roughly 5.5 months of inventory — a balanced pace rather than a frenzy or a freeze.",
    longAnswer:
      "View homes that are priced to recent comps still move; overpriced elevated lots linger. Pricing strategy matters more here than in denser valley tracts because buyers can see the view premium (or lack of it) from the street.",
  },
  {
    question: "Which parks and shopping are near Lone Mountain Heights?",
    shortAnswer:
      "Residents use Lone Mountain trail and park areas, Majestic Park, Trigono Hills Park, and Centennial Center for Costco, Target, Walmart, and dining — with 215 Beltway access for Summerlin and Strip trips.",
    longAnswer:
      "Amenity access changes by street inside 89129. A home three minutes closer to Durango or Ann Road corridors can change daily errand patterns. Ask for a street-level amenity map on your tour.",
  },
  {
    question: "How do I schedule a private showing in Lone Mountain Heights?",
    shortAnswer:
      "Book on Calendly on this page or call Dr. Jan Duffy at 702-222-1964. Showings are handled directly through Berkshire Hathaway HomeServices Nevada Properties, License S.0197614.LLC.",
    longAnswer:
      "Same-week private tours are often available for active MLS listings. Office appointments are at 7475 W Sahara Ave, Suite 100, Las Vegas, NV 89117 — Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment.",
  },
];

export function lmhFaqSchemaMainEntity() {
  return LMH_FAQS.map((faq) => ({
    "@type": "Question" as const,
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: `${faq.shortAnswer} ${faq.longAnswer}`,
    },
  }));
}
