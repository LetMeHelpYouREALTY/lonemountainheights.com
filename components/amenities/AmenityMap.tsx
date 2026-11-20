"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CommunityAmenityConfig, AmenityCategoryId } from "@/lib/amenities/types";
import { getCategoryDefinition, orderCategories } from "./amenity-categories";
import { StaticAmenityList } from "./StaticAmenityList";

const MAP_HEIGHT_PX = 480;
const SEARCH_RADIUS_M = 8000;

type AmenityMapProps = {
  config: CommunityAmenityConfig;
  /** Smaller chrome on homepage preview */
  compact?: boolean;
};

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("No window"));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }
  if (window.__amenityMapsScriptLoading) {
    return window.__amenityMapsScriptLoading;
  }
  window.__amenityMapsScriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&loading=async`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Maps script failed to load"));
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
  return window.__amenityMapsScriptLoading;
}

function buildInfoContent(name: string, address: string, rating?: number, mapsUri?: string) {
  const ratingLine =
    rating !== undefined && rating > 0
      ? `<p style="margin:4px 0;font-size:13px;">Rating: ${rating.toFixed(1)}</p>`
      : "";
  const directionsUrl =
    mapsUri ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${name}, ${address}`
    )}`;
  return `<div style="max-width:240px;padding:4px 0;">
    <strong>${name}</strong>
    ${ratingLine}
    <p style="margin:4px 0;font-size:13px;color:#475569;">${address}</p>
    <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="font-size:13px;color:#2563eb;">Directions</a>
  </div>`;
}

export function AmenityMap({ config, compact = false }: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(
    config.categoryOrder[0]
  );
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [mapStatus, setMapStatus] = useState<"idle" | "loading" | "ready" | "error">(
    apiKey ? "idle" : "error"
  );

  const categories = orderCategories(config.categoryOrder);
  const center = { lat: config.center.lat, lng: config.center.lng };

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const searchNearby = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      if (!window.google?.maps) return;
      const category = getCategoryDefinition(categoryId);
      clearMarkers();
      try {
        const placesLib = (await google.maps.importLibrary(
          "places"
        )) as google.maps.PlacesLibrary;
        const { places } = await placesLib.Place.searchNearby({
          fields: ["displayName", "location", "formattedAddress", "rating", "googleMapsURI"],
          locationRestriction: { center, radius: SEARCH_RADIUS_M },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 20,
        });

        const bounds = new google.maps.LatLngBounds();
        bounds.extend(center);

        places.forEach((place) => {
          const loc = place.location;
          if (!loc) return;
          const name = place.displayName ?? "Place";
          const address = place.formattedAddress ?? "";
          const marker = new google.maps.Marker({
            map,
            position: loc,
            title: name,
          });
          marker.addListener("click", () => {
            if (!infoWindowRef.current) {
              infoWindowRef.current = new google.maps.InfoWindow();
            }
            infoWindowRef.current.setContent(
              buildInfoContent(name, address, place.rating, place.googleMapsURI)
            );
            infoWindowRef.current.open({ map, anchor: marker });
          });
          markersRef.current.push(marker);
          bounds.extend(loc);
        });

        if (communityMarkerRef.current) {
          bounds.extend(center);
        }
        map.fitBounds(bounds);
      } catch {
        setUseFallback(true);
        setMapStatus("error");
      }
    },
    [center, clearMarkers]
  );

  useEffect(() => {
    if (!isInView || useFallback || !apiKey || !mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    let cancelled = false;

    async function init() {
      setMapStatus("loading");
      try {
        await loadGoogleMapsScript(apiKey!);
        if (cancelled || !mapContainerRef.current) return;

        const map = new google.maps.Map(mapContainerRef.current, {
          center,
          zoom: 13,
          mapId: mapId || undefined,
          disableDefaultUI: compact,
          zoomControl: true,
          streetViewControl: !compact,
          mapTypeControl: !compact,
          fullscreenControl: true,
        });
        mapInstanceRef.current = map;

        const communityMarker = new google.maps.Marker({
          map,
          position: center,
          title: config.center.label,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          },
        });
        communityMarker.addListener("click", () => {
          if (!infoWindowRef.current) {
            infoWindowRef.current = new google.maps.InfoWindow();
          }
          infoWindowRef.current.setContent(
            buildInfoContent(config.communityName, config.center.address)
          );
          infoWindowRef.current.open({ map, anchor: communityMarker });
        });
        communityMarkerRef.current = communityMarker;

        await searchNearby(map, activeCategory);
        if (!cancelled) setMapStatus("ready");
      } catch {
        if (!cancelled) {
          setUseFallback(true);
          setMapStatus("error");
        }
      }
    }

    void init();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- map initializes once per mount
  }, [isInView, useFallback, apiKey, mapId, config.communityName, config.center, compact, center]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || useFallback || mapStatus !== "ready") return;
    void searchNearby(map, activeCategory);
  }, [activeCategory, mapStatus, searchNearby, useFallback]);

  const embedSrc = `https://www.google.com/maps?q=${center.lat},${center.lng}&z=14&output=embed`;

  return (
    <div ref={wrapperRef} className="w-full">
      <div
        role="tablist"
        aria-label="Filter amenities by category"
        className="flex flex-wrap gap-2 mb-4"
      >
        {categories.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="amenity-map-panel"
              id={`amenity-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id="amenity-map-panel"
        role="tabpanel"
        aria-labelledby={`amenity-tab-${activeCategory}`}
        className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
        style={{ minHeight: MAP_HEIGHT_PX }}
      >
        {useFallback ? (
          <iframe
            title={`Map of ${config.communityName}, ${config.city}`}
            src={embedSrc}
            width="100%"
            height={MAP_HEIGHT_PX}
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div
            ref={mapContainerRef}
            className="w-full bg-slate-200"
            style={{ height: MAP_HEIGHT_PX }}
            aria-label={`Interactive map of ${config.communityName} area`}
            aria-busy={mapStatus === "loading"}
          />
        )}
      </div>

      {useFallback && (
        <p className="text-sm text-slate-600 mt-3">
          Interactive map loads when a Google Maps API key is configured. Featured places below are
          always available.
        </p>
      )}

      <StaticAmenityList config={config} activeCategory={activeCategory} />
    </div>
  );
}
