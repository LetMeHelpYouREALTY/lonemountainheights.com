import type { DomainConfig } from './domain-config'

/** Client-facing CTA line per fleet standard. */
export const CLIENT_PHONE_DISPLAY = '702-222-1964'
export const CLIENT_PHONE_TEL = 'tel:+17022221964'

const OFFICE = {
  streetAddress: '7475 W Sahara Ave, Suite 100',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89117',
  addressCountry: 'US',
} as const

export function siteOrigin(config: DomainConfig): string {
  return config.domain !== 'default' ? `https://${config.domain}` : 'https://www.heyberkshire.com'
}

export function agentHeadshotPath(): string {
  return '/images/dr-jan-duffy-headshot.jpg'
}

export type RealScoutPriceBand = { priceMin: number; priceMax?: number }

export function realScoutPriceBand(config: DomainConfig): RealScoutPriceBand {
  if (config.pageType === 'luxury') {
    return { priceMin: 600_000 }
  }
  if (config.pageType === '55plus') {
    return { priceMin: 350_000, priceMax: 900_000 }
  }
  return { priceMin: 400_000, priceMax: 1_200_000 }
}

/** Lone Mountain Heights / 89129 ridgeline area (approximate center). */
export const LONE_MOUNTAIN_HEIGHTS_GEO = {
  latitude: 36.218,
  longitude: -115.252,
  postalCode: '89129',
} as const

export function placeGeoForConfig(config: DomainConfig): { latitude: number; longitude: number; name: string } | null {
  if (config.domain === 'lonemountainheights.com') {
    return {
      name: 'Lone Mountain Heights',
      latitude: LONE_MOUNTAIN_HEIGHTS_GEO.latitude,
      longitude: LONE_MOUNTAIN_HEIGHTS_GEO.longitude,
    }
  }
  return null
}

export function officePostalAddress() {
  return OFFICE
}