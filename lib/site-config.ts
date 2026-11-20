// Site Configuration — Lone Mountain Heights
// Homes by Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties

import { AGENT, BRAND, LONE_MOUNTAIN_HEIGHTS, OFFICE } from "@/lib/brand";

export const siteConfig = {
  name: BRAND.name,
  fullName: BRAND.fullName,
  tagline: BRAND.tagline,
  brandLine: `${BRAND.name} | ${BRAND.subscript}`,
  brandName: BRAND.name,
  shortName: "LMH",
  url: BRAND.url,
  description: BRAND.description,
  subscript: BRAND.subscript,
};

export const agentInfo = {
  name: AGENT.name,
  title: AGENT.title,
  license: AGENT.license,
  phone: AGENT.phone,
  phoneFormatted: AGENT.phone,
  phoneTel: AGENT.phoneTel,
  email: AGENT.email,
  brokerage: AGENT.brokerage,
  portrait: AGENT.portrait,
};

export const officeInfo = {
  name: OFFICE.name,
  address: {
    street: OFFICE.street,
    city: OFFICE.city,
    state: OFFICE.state,
    zip: OFFICE.zip,
    full: OFFICE.full,
  },
  coordinates: {
    lat: OFFICE.lat,
    lng: OFFICE.lng,
  },
  phone: AGENT.phone,
  phoneTel: AGENT.phoneTel,
};

// Market Statistics — Lone Mountain Heights / 89129 corridor (Nov 2026)
export const marketStats = {
  lastUpdated: "November 2026",
  loneMountainHeights: {
    medianPrice: 749900,
    medianPriceFormatted: LONE_MOUNTAIN_HEIGHTS.medianListEstimate,
    yearOverYearChange: "+5.2%",
    daysOnMarket: 12,
    priceRange: LONE_MOUNTAIN_HEIGHTS.priceRange,
    zip: LONE_MOUNTAIN_HEIGHTS.zip,
  },
  lasVegas: {
    medianPrice: 450000,
    medianPriceFormatted: "$450,000",
    yearOverYearChange: "+4.2%",
    daysOnMarket: 28,
    activeListings: 4850,
    closedSales: 2340,
    inventoryMonths: 2.1,
  },
  henderson: {
    medianPrice: 485000,
    medianPriceFormatted: "$485,000",
    yearOverYearChange: "+5.1%",
    daysOnMarket: 24,
    activeListings: 1280,
  },
  summerlin: {
    medianPrice: 625000,
    medianPriceFormatted: "$625,000",
    yearOverYearChange: "+6.8%",
    daysOnMarket: 22,
    luxuryMedian: 1200000,
    luxuryMedianFormatted: "$1.2M",
  },
  luxury: {
    medianPrice: 1200000,
    medianPriceFormatted: "$1.2M",
    activeListings: 890,
    daysOnMarket: 45,
    pricePerSqFt: 385,
  },
};

export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 5.0,
  reviewCount: 50,
};

export const valuePropositions = {
  main: `Lone Mountain Heights buyers and sellers get hyperlocal guidance from ${AGENT.name} — gated-community comps, view premiums, and negotiation strategy backed by Berkshire Hathaway HomeServices.`,
  trust:
    "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. Unmatched financial stability, ethical standards, and a global referral network.",
  expertise: `Serving Las Vegas since 2008 with $127M+ in closed transactions, ${AGENT.name} combines Lone Mountain Heights market knowledge with the resources of a global brand.`,
};

export const neighborhoods = [
  {
    name: "Lone Mountain Heights",
    slug: "lone-mountain-heights",
    description:
      "Gated Northwest Las Vegas community with mountain views near Lone Mountain Regional Park",
    medianPrice: LONE_MOUNTAIN_HEIGHTS.medianListEstimate,
    highlights: [
      "Gated community",
      "Mountain views",
      "89129 ZIP",
      "Trail access",
    ],
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Master-planned community with parks, trails, and nearby public schools",
    medianPrice: "$625,000",
    highlights: [
      "Red Rock views",
      "150+ parks",
      "Nearby public schools",
      "Golf courses",
    ],
  },
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Nevada's second-largest city with master-planned neighborhoods",
    medianPrice: "$485,000",
    highlights: [
      "Public crime maps",
      "Nearby public schools",
      "Lake Las Vegas",
      "Green Valley",
    ],
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "Established Henderson community with mature landscaping",
    medianPrice: "$520,000",
    highlights: ["Golf courses", "Walking trails", "Shopping", "Parks"],
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Ultra-luxury guard-gated community in Summerlin",
    medianPrice: "$2.5M",
    highlights: [
      "Celebrity homes",
      "Custom estates",
      "Bear's Best Golf",
      "Strip views",
    ],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description: "Master-planned luxury community with championship golf",
    medianPrice: "$750,000",
    highlights: [
      "Golf community",
      "Guard-gated",
      "Mountain views",
      "Luxury amenities",
    ],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "Rapidly growing area with new construction options",
    medianPrice: "$385,000",
    highlights: ["New construction", "Growing area", "Value opportunities"],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    description: "Newer master-planned community in northwest Las Vegas",
    medianPrice: "$550,000",
    highlights: [
      "New homes",
      "Mountain views",
      "Modern amenities",
      "Nearby public schools",
    ],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description: "Northwest Las Vegas community with mountain proximity",
    medianPrice: "$495,000",
    highlights: ["Mountain access", "Parks", "Shopping"],
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description: "Henderson master-planned community with resort-style living",
    medianPrice: "$525,000",
    highlights: [
      "Resort pools",
      "Walking trails",
      "New construction",
      "Nearby public schools",
    ],
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    description: "Southwest Las Vegas master-planned community",
    medianPrice: "$475,000",
    highlights: ["Mountain views", "Parks", "Growing area"],
  },
];

export const services = [
  {
    name: "Home Buying",
    slug: "buyers",
    description:
      "Expert guidance through every step of buying in Lone Mountain Heights and beyond",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description:
      "Maximize your Lone Mountain Heights home's value with professional marketing",
    icon: "TrendingUp",
  },
  {
    name: "Luxury Homes",
    slug: "luxury-homes",
    description:
      "Specialized expertise in Las Vegas luxury and gated communities",
    icon: "Star",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description:
      "Buyer representation for new home purchases across the valley",
    icon: "Building",
  },
  {
    name: "Investment Properties",
    slug: "investment-properties",
    description: "Strategic consulting for rental and investment opportunities",
    icon: "DollarSign",
  },
  {
    name: "Relocation",
    slug: "relocation",
    description: "Relocation assistance for moves into Northwest Las Vegas",
    icon: "Truck",
  },
  {
    name: "Home Valuation",
    slug: "home-valuation",
    description: "Free property valuations using current MLS comps",
    icon: "Calculator",
  },
  {
    name: "Market Analysis",
    slug: "market-report",
    description: "In-depth Lone Mountain Heights and Las Vegas market insights",
    icon: "BarChart",
  },
];

export const expertQuotes = {
  market: `"Lone Mountain Heights holds a premium in 89129 because gated privacy and mountain proximity still matter to relocating buyers. Inventory is thin — timing and pricing strategy win deals."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your Lone Mountain Heights home correctly from day one is the single most important factor in getting top dollar. Overpriced homes sit, and every day on market costs you money."`,
  luxury: `"Luxury and gated-community buyers expect discretion, market expertise, and flawless execution. In this price range, one wrong move can cost tens of thousands."`,
  investment: `"Northwest Las Vegas rental demand stays resilient. You need street-level comps — not metro averages — to underwrite correctly."`,
  relocation: `"Moving to Las Vegas is stressful enough. I handle neighborhood tours, contractor referrals, and closing logistics so you can focus on settling in."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Having your own representation costs you nothing but can save you tens of thousands in upgrades and negotiations."`,
  valueProposition: `"When clients ask why Lone Mountain Heights, I show them the gated setting, the trail access, and the comps. Then we tour — data first, emotion second."`,
};

export const commonFAQs = {
  general: LONE_MOUNTAIN_HEIGHTS.faqs,
  buying: [
    {
      question: "How long does buying a home in Lone Mountain Heights take?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days depending on inspections and title.",
    },
    {
      question:
        "Do I need a pre-approval before touring Lone Mountain Heights?",
      answer:
        "Yes. A pre-approval shows sellers you're serious and clarifies your budget. Dr. Jan can connect you with trusted local lenders.",
    },
    {
      question: "Are there HOA fees in Lone Mountain Heights?",
      answer:
        "Yes — as a gated community, Lone Mountain Heights typically includes HOA dues covering gate and common-area maintenance. Confirm current dues on each listing before writing an offer.",
    },
  ],
  selling: [
    {
      question: "What is my Lone Mountain Heights home worth?",
      answer:
        "Values depend on view corridors, upgrades, pool/spa, lot position, and recent gated-community comps. Dr. Jan provides a free CMA using current MLS data.",
    },
    {
      question: "How long will it take to sell in Lone Mountain Heights?",
      answer:
        "Well-priced homes in this corridor have recently averaged roughly 12 days on market. Overpricing is the #1 reason listings stall.",
    },
    {
      question: "How should I prepare my home for sale?",
      answer:
        "Declutter, complete minor repairs, refresh paint, and invest in professional photography. Dr. Jan provides a personalized prep checklist for every listing.",
    },
  ],
};
