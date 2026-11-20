export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type CuratedPlaceSchemaType =
  | "Restaurant"
  | "CafeOrCoffeeShop"
  | "GroceryStore"
  | "Park"
  | "GolfCourse"
  | "Hospital"
  | "Pharmacy"
  | "ShoppingCenter"
  | "School"
  | "ExerciseGym";

export interface CommunityCenter {
  lat: number;
  lng: number;
  /** Human-readable anchor (e.g. regional park address) */
  label: string;
  address: string;
}

export interface CuratedPlace {
  name: string;
  address: string;
  category: AmenityCategoryId;
  schemaType: CuratedPlaceSchemaType;
  note?: string;
}

export interface AmenityWrittenSection {
  id: AmenityCategoryId | "commute";
  title: string;
  paragraphs: string[];
}

export interface AmenityFaq {
  question: string;
  answer: string;
}

export interface CommunityAmenityConfig {
  communityName: string;
  city: string;
  state: string;
  zip: string;
  center: CommunityCenter;
  /** Category chip order for this community */
  categoryOrder: AmenityCategoryId[];
  curatedPlaces: CuratedPlace[];
  writtenSections: AmenityWrittenSection[];
  faqs: AmenityFaq[];
  commute: {
    title: string;
    items: { destination: string; detail: string }[];
  };
}
