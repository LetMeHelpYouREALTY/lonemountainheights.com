import type { DomainConfig } from './domain-config'
import {
  agentHeadshotPath,
  CLIENT_PHONE_DISPLAY,
  officePostalAddress,
  placeGeoForConfig,
  siteOrigin,
} from './domain-site'

export function homePageJsonLd(config: DomainConfig) {
  const origin = siteOrigin(config)
  const headshot = `${origin}${agentHeadshotPath()}`
  const address = officePostalAddress()

  const place = placeGeoForConfig(config)
  const placeId = `${origin}/#place`

  const agent = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${origin}/#agent`,
    name: 'Dr. Jan Duffy',
    url: origin,
    image: headshot,
    telephone: CLIENT_PHONE_DISPLAY,
    description: config.description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    areaServed: place ? { '@id': placeId } : { '@type': 'Place', name: config.neighborhood },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  }

  const schemas: object[] = [agent]

  if (place) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Place',
      '@id': placeId,
      name: place.name,
      description: config.description,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: place.latitude,
        longitude: place.longitude,
      },
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Clark County',
        containedInPlace: { '@type': 'State', name: 'Nevada' },
      },
    })
  }

  return schemas
}