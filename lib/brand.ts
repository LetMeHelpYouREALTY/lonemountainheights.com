/**
 * Lone Mountain Heights brand constants
 * Homes by Dr. Jan Duffy | BHHS Nevada Properties
 */

export const BRAND = {
  name: "Lone Mountain Heights",
  subscript: "Homes by Dr. Jan Duffy",
  fullName: "Lone Mountain Heights — Homes by Dr. Jan Duffy",
  domain: "lonemountainheights.com",
  url: "https://lonemountainheights.com",
  tagline: "Luxury living at the base of Lone Mountain",
  description:
    "Lone Mountain Heights homes for sale in Las Vegas 89129. Gated Northwest Las Vegas community with mountain views. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  keywords: [
    "Lone Mountain Heights",
    "Lone Mountain Heights homes for sale",
    "Lone Mountain Heights Las Vegas",
    "89129 homes for sale",
    "Northwest Las Vegas real estate",
    "gated community Las Vegas",
    "Dr. Jan Duffy",
    "Lone Mountain real estate",
  ],
} as const;

export const AGENT = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  /** Client-facing CTA line */
  phone: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
  /** Professional / FUB line — do not use as primary CTA */
  phoneProfessional: "(702) 500-1942",
  email: "homes@heyberkshire.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  portrait: "/images/agent/dr-jan-duffy.png",
  portraitAlt:
    "Dr. Jan Duffy, REALTOR® — Lone Mountain Heights homes specialist, Berkshire Hathaway HomeServices Nevada Properties",
} as const;

export const OFFICE = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  street: "9406 W Lake Mead Blvd, Suite 100",
  city: "Las Vegas",
  state: "NV",
  zip: "89134",
  full: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
  lat: 36.1893,
  lng: -115.2821,
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8!2d-115.2821!3d36.1893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzIxLjUiTiAxMTXCsDE2JzU1LjYiVw!5e0!3m2!1sen!2sus!4v1",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
  /** Google Business Profile reviews / write-a-review */
  reviewsUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ7XLw8ta5yIARjTZPjgHJWVQ",
  realtorReviewsUrl:
    "https://www.realtor.com/realestateagents/dr-jan-duffy_las-vegas_nv_1782023",
} as const;

export const CALENDLY = {
  showing: "https://calendly.com/drjanduffy/showing",
  appointment: "https://calendly.com/drjanduffy/appointment",
} as const;

export const REALSCOUT = {
  agentId: "QWdlbnQtMjI1MDUw",
  portal: "https://drjanduffy.realscout.com/",
} as const;

/** Lone Mountain Heights market snapshot (as of Nov 2026 — verify before citing exact comps) */
export const LONE_MOUNTAIN_HEIGHTS = {
  zip: "89129",
  community: "Lone Mountain Heights",
  area: "Northwest Las Vegas",
  medianListEstimate: "$749,900",
  priceRange: "$600K–$800K+",
  highlights: [
    "Gated Northwest Las Vegas community",
    "Mountain and valley views near Lone Mountain",
    "Spacious single-family floor plans",
    "Pools, outdoor living, and entertainer layouts",
    "Quick access to US-95, shopping, and trails",
  ],
  faqs: [
    {
      question: "Where is Lone Mountain Heights in Las Vegas?",
      answer:
        "Lone Mountain Heights is a gated residential community in Northwest Las Vegas ZIP 89129, near Lone Mountain Regional Park and trail access, with convenient freeway connections via US-95.",
    },
    {
      question: "What is the typical home price in Lone Mountain Heights?",
      answer:
        "Recent Lone Mountain Heights listings often fall in the mid-to-high $600Ks through the $700Ks, with an estimated community median near $749,900. Exact values depend on size, condition, upgrades, and views—schedule a consultation for current comps.",
    },
    {
      question: "Is Lone Mountain Heights a gated community?",
      answer:
        "Yes. Lone Mountain Heights is a gated Northwest Las Vegas community known for larger single-family homes, cul-de-sac privacy, and proximity to hiking at Lone Mountain.",
    },
    {
      question: "Who can help me buy or sell in Lone Mountain Heights?",
      answer:
        "Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in Lone Mountain Heights and the broader 89129 corridor. Call or text (702) 222-1964 or book a showing on Calendly.",
    },
  ],
} as const;
