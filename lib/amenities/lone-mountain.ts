import type { CommunityAmenityConfig } from "./types";

/**
 * Lone Mountain (Northwest Las Vegas, 89129).
 * Map center: Lone Mountain Regional Park (OpenStreetMap leisure=park, ~36.2395, -115.3143).
 * Clark County Parks lists the site on West Lone Mountain Road in the 89129 area.
 */
export const LONE_MOUNTAIN_AMENITY_CONFIG: CommunityAmenityConfig = {
  communityName: "Lone Mountain",
  city: "Las Vegas",
  state: "NV",
  zip: "89129",
  center: {
    lat: 36.2395391,
    lng: -115.3142763,
    label: "Lone Mountain",
    address: "Lone Mountain Regional Park area, Las Vegas, NV 89129",
  },
  categoryOrder: [
    "grocery",
    "parks",
    "restaurants",
    "cafes",
    "healthcare",
    "pharmacies",
    "shopping",
    "fitness",
    "golf",
    "schools",
    "parking",
  ],
  curatedPlaces: [
    {
      name: "Lone Mountain Regional Park",
      address: "West Lone Mountain Road, Las Vegas, NV 89129",
      category: "parks",
      schemaType: "Park",
      note: "Clark County park with trails and open space at the base of Lone Mountain.",
    },
    {
      name: "Mountain Falls Park",
      address: "6332 N Buffalo Dr, Las Vegas, NV 89131",
      category: "parks",
      schemaType: "Park",
    },
    {
      name: "Smith's Food and Drug",
      address: "6855 N Durango Dr, Las Vegas, NV 89149",
      category: "grocery",
      schemaType: "GroceryStore",
    },
    {
      name: "Albertsons",
      address: "7465 W Lake Mead Blvd, Las Vegas, NV 89128",
      category: "grocery",
      schemaType: "GroceryStore",
    },
    {
      name: "Costco Wholesale",
      address: "8013 W Azure Dr, Las Vegas, NV 89128",
      category: "grocery",
      schemaType: "GroceryStore",
    },
    {
      name: "Centennial Hills Hospital Medical Center",
      address: "6900 N Durango Dr, Las Vegas, NV 89149",
      category: "healthcare",
      schemaType: "Hospital",
      note: "Dignity Health hospital serving Northwest Las Vegas.",
    },
    {
      name: "Summerlin Hospital Medical Center",
      address: "657 Town Center Dr, Las Vegas, NV 89144",
      category: "healthcare",
      schemaType: "Hospital",
    },
    {
      name: "Centennial Hills YMCA",
      address: "6601 N Buffalo Dr, Las Vegas, NV 89131",
      category: "fitness",
      schemaType: "ExerciseGym",
    },
    {
      name: "Centennial Hills Active Adult Center",
      address: "6601 N Buffalo Dr, Las Vegas, NV 89131",
      category: "fitness",
      schemaType: "ExerciseGym",
      note: "Clark County recreation center adjacent to the YMCA campus.",
    },
    {
      name: "Centennial Center",
      address: "8625 W Centennial Rd, Las Vegas, NV 89149",
      category: "shopping",
      schemaType: "ShoppingCenter",
    },
    {
      name: "Painted Desert Golf Club",
      address: "5555 Painted Mirage Rd, Las Vegas, NV 89129",
      category: "golf",
      schemaType: "GolfCourse",
    },
    {
      name: "Lied Middle School",
      address: "5025 W Deer Springs Way, Las Vegas, NV 89149",
      category: "schools",
      schemaType: "School",
      note: "Clark County School District — verify attendance zones for a specific address.",
    },
    {
      name: "Dean LaMar Allen Elementary School",
      address: "6640 N Buffalo Dr, Las Vegas, NV 89131",
      category: "schools",
      schemaType: "School",
      note: "Clark County School District — verify attendance zones for a specific address.",
    },
  ],
  writtenSections: [
    {
      id: "grocery",
      title: "Grocery & everyday errands",
      paragraphs: [
        "Lone Mountain sits in Northwest Las Vegas with quick access to full-service grocers along Durango Drive and Lake Mead Boulevard. Smith's Food and Drug on North Durango Drive and Albertsons on West Lake Mead Boulevard are everyday stops for residents. Costco Wholesale on West Azure Drive is a short drive west for bulk shopping.",
      ],
    },
    {
      id: "parks",
      title: "Parks & outdoor recreation",
      paragraphs: [
        "Lone Mountain Regional Park anchors outdoor life at the base of the namesake butte, with desert trails and valley views. Mountain Falls Park in Centennial Hills adds playgrounds, splash features, and picnic areas along North Buffalo Drive — a common weekend destination for families in the 89129 corridor.",
      ],
    },
    {
      id: "restaurants",
      title: "Dining near Lone Mountain",
      paragraphs: [
        "Restaurant options cluster along West Craig Road, North Durango Drive, and the Centennial Hills retail corridors. You will find national chains, fast-casual spots, and local favorites without driving to the Strip. Use the map filters above to browse current restaurants near Lone Mountain.",
      ],
    },
    {
      id: "golf",
      title: "Golf",
      paragraphs: [
        "Painted Desert Golf Club on Painted Mirage Road is the closest public course to Lone Mountain. Summerlin's championship courses, including Bear's Best and TPC Las Vegas, are a short drive south for members and public tee times when available.",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      paragraphs: [
        "Centennial Hills Hospital Medical Center on North Durango Drive provides emergency and inpatient care for Northwest Las Vegas. Summerlin Hospital Medical Center in Downtown Summerlin adds another full-service option minutes south of Lone Mountain.",
      ],
    },
    {
      id: "shopping",
      title: "Shopping",
      paragraphs: [
        "Centennial Center on West Centennial Road combines big-box retail, services, and restaurants in one stop. Additional shopping spreads along Durango Drive and the US-95 corridor toward Summerlin.",
      ],
    },
    {
      id: "schools",
      title: "Schools",
      paragraphs: [
        "Lone Mountain and Centennial Hills are served by Clark County School District campuses such as Dean LaMar Allen Elementary and Lied Middle School. Attendance boundaries change — confirm your assigned schools with CCSD for any address you are considering.",
      ],
    },
    {
      id: "commute",
      title: "Commute & regional access",
      paragraphs: [
        "Lone Mountain is northwest of the Las Vegas Strip with US-95 and the 215 Beltway nearby. Summerlin sits directly south; Centennial Hills and Skye Canyon continue the master-planned growth to the north and west.",
      ],
    },
  ],
  faqs: [
    {
      question: "What grocery stores are near Lone Mountain?",
      answer:
        "Smith's on North Durango Drive, Albertsons on West Lake Mead Boulevard, and Costco on West Azure Drive are the closest full-service grocers for Lone Mountain and Centennial Hills.",
    },
    {
      question: "How far is Lone Mountain from the Las Vegas Strip?",
      answer:
        "The Strip is roughly 12–15 miles southeast of Lone Mountain — typically about 20–30 minutes by car depending on traffic and your starting cross-street (approximate).",
    },
    {
      question: "Are there hospitals near Lone Mountain?",
      answer:
        "Yes. Centennial Hills Hospital Medical Center on North Durango Drive is the nearest hospital, with Summerlin Hospital Medical Center in Downtown Summerlin a few minutes south.",
    },
    {
      question: "What parks are in the Lone Mountain area?",
      answer:
        "Lone Mountain Regional Park offers trails and open space at the butte, and Mountain Falls Park in Centennial Hills adds playgrounds and splash areas along North Buffalo Drive.",
    },
    {
      question: "How far is Harry Reid International Airport from Lone Mountain?",
      answer:
        "Harry Reid International Airport is roughly 15–18 miles south — often about 25–35 minutes by car in normal traffic (approximate).",
    },
    {
      question: "Is Lone Mountain close to Summerlin?",
      answer:
        "Yes. Lone Mountain borders Summerlin to the north; Downtown Summerlin shops and Summerlin Hospital are a short drive south on Durango or the 215 Beltway.",
    },
    {
      question: "Where do Lone Mountain students attend school?",
      answer:
        "Most addresses are in Clark County School District; nearby campuses include Dean LaMar Allen Elementary and Lied Middle School — always verify your zone with CCSD for a specific home.",
    },
    {
      question: "Who can help me buy or sell in Lone Mountain?",
      answer:
        "Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in Northwest Las Vegas communities including Lone Mountain — call 702-222-1964 for a private consultation.",
    },
  ],
  commute: {
    title: "Approximate drive times from Lone Mountain",
    items: [
      {
        destination: "Las Vegas Strip (mid-Strip)",
        detail: "About 20–30 minutes via US-95 or I-15 (approximate, traffic-dependent).",
      },
      {
        destination: "Harry Reid International Airport",
        detail: "About 25–35 minutes south on US-95 to the airport connectors (approximate).",
      },
      {
        destination: "Downtown Summerlin",
        detail: "About 10–15 minutes south on Durango Drive or the 215 Beltway (approximate).",
      },
      {
        destination: "Centennial Hills Hospital",
        detail: "About 10 minutes east on Craig Road or Lone Mountain Road to North Durango (approximate).",
      },
    ],
  },
};
