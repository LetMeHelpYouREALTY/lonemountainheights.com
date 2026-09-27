import type { CommunityAmenityConfig, AmenityCategoryId } from "@/lib/amenities/types";
import { orderCategories } from "./amenity-categories";

type StaticAmenityListProps = {
  config: CommunityAmenityConfig;
  activeCategory?: AmenityCategoryId;
  showAllCategories?: boolean;
};

export function StaticAmenityList({
  config,
  activeCategory,
  showAllCategories = false,
}: StaticAmenityListProps) {
  const categories = orderCategories(config.categoryOrder);
  const visibleCategories = showAllCategories
    ? categories
    : categories.filter((c) => c.id === activeCategory);

  return (
    <div className="mt-6 space-y-8" aria-label="Featured nearby places">
      {visibleCategories.map((category) => {
        const places = config.curatedPlaces.filter((p) => p.category === category.id);
        if (places.length === 0) return null;
        return (
          <div key={category.id}>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{category.label}</h3>
            <ul className="space-y-3">
              {places.map((place) => (
                <li
                  key={`${place.name}-${place.address}`}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-medium text-slate-900">{place.name}</p>
                  <p className="text-sm text-slate-600 mt-1">{place.address}</p>
                  {place.note && <p className="text-sm text-slate-500 mt-2">{place.note}</p>}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${place.name}, ${place.address}`
                    )}`}
                    className="inline-block mt-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Directions
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
