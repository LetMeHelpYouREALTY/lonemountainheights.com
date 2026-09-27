import type { AmenityCategoryId } from "@/lib/amenities/types";

export interface AmenityCategoryDefinition {
  id: AmenityCategoryId;
  label: string;
  /** Google Places API (New) primary types for searchNearby */
  placeTypes: string[];
}

export const AMENITY_CATEGORY_DEFINITIONS: AmenityCategoryDefinition[] = [
  { id: "restaurants", label: "Restaurants", placeTypes: ["restaurant"] },
  { id: "cafes", label: "Cafes", placeTypes: ["cafe", "coffee_shop"] },
  { id: "grocery", label: "Grocery", placeTypes: ["grocery_store", "supermarket"] },
  { id: "parks", label: "Parks", placeTypes: ["park"] },
  { id: "golf", label: "Golf", placeTypes: ["golf_course"] },
  { id: "healthcare", label: "Healthcare", placeTypes: ["hospital", "doctor"] },
  { id: "pharmacies", label: "Pharmacies", placeTypes: ["pharmacy", "drugstore"] },
  { id: "shopping", label: "Shopping", placeTypes: ["shopping_mall", "department_store"] },
  { id: "parking", label: "Parking", placeTypes: ["parking"] },
  { id: "fitness", label: "Fitness", placeTypes: ["gym", "fitness_center"] },
  { id: "schools", label: "Schools", placeTypes: ["school", "primary_school", "secondary_school"] },
];

export function getCategoryDefinition(id: AmenityCategoryId): AmenityCategoryDefinition {
  const found = AMENITY_CATEGORY_DEFINITIONS.find((c) => c.id === id);
  if (!found) {
    return AMENITY_CATEGORY_DEFINITIONS[0];
  }
  return found;
}

export function orderCategories(order: AmenityCategoryId[]): AmenityCategoryDefinition[] {
  const byId = new Map(AMENITY_CATEGORY_DEFINITIONS.map((c) => [c.id, c]));
  return order.map((id) => byId.get(id) ?? getCategoryDefinition(id));
}
