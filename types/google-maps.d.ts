/* Minimal typings for Maps JavaScript API + Places (New) used by AmenityMap */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts: MapOptions);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    fitBounds(bounds: LatLngBounds): void;
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    setContent(content: string): void;
    open(opts: { map: Map; anchor?: Marker }): void;
    close(): void;
  }
  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void;
  }
  class Circle {
    constructor(opts: CircleOptions);
    getBounds(): LatLngBounds;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
    streetViewControl?: boolean;
    mapTypeControl?: boolean;
    fullscreenControl?: boolean;
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    icon?: string | { url: string; scaledSize?: { width: number; height: number } };
  }
  interface InfoWindowOptions {
    content?: string;
  }
  interface CircleOptions {
    map?: Map;
    center?: LatLngLiteral;
    radius?: number;
    visible?: boolean;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  type LatLng = LatLngLiteral;
  interface PlacesLibrary {
    Place: {
      searchNearby: (request: PlaceSearchNearbyRequest) => Promise<{ places: PlaceResult[] }>;
    };
  }
  interface PlaceSearchNearbyRequest {
    fields: string[];
    locationRestriction: {
      center: LatLngLiteral;
      radius: number;
    };
    includedPrimaryTypes?: string[];
    maxResultCount?: number;
  }
  interface PlaceResult {
    displayName?: string;
    formattedAddress?: string;
    rating?: number;
    location?: LatLngLiteral;
    googleMapsURI?: string;
  }
  function importLibrary(name: "maps" | "places"): Promise<PlacesLibrary | unknown>;
}

interface Window {
  google?: typeof google;
  __amenityMapsScriptLoading?: Promise<void>;
}
