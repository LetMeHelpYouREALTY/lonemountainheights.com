import type { DomainConfig } from './domain-config'
import {
  BROKERAGE_LOGO_PATH,
  BROKERAGE_NAME,
  BROKERAGE_SOCIAL,
  BROKERAGE_URL,
} from './brokerage'
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
  const brokerageLogo = `${origin}${BROKERAGE_LOGO_PATH}`
  const address = officePostalAddress()

  const place = placeGeoForConfig(config)
  const placeId = `${origin}/#place`
  const brokerageId = `${BROKERAGE_URL}#organization`

  const brokerage = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': brokerageId,
    name: BROKERAGE_NAME,
    url: BROKERAGE_URL,
    logo: brokerageLogo,
    image: brokerageLogo,
    sameAs: Object.values(BROKERAGE_SOCIAL),
  }

  const agent = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${origin}/#agent`,
    name: 'Dr. Jan Duffy',
    url: origin,
    image: headshot,
    logo: brokerageLogo,
    telephone: CLIENT_PHONE_DISPLAY,
    description: config.description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    worksFor: { '@id': brokerageId },
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

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: origin,
    name: `${config.neighborhood} | Dr. Jan Duffy`,
    description: config.description,
    inLanguage: 'en-US',
    publisher: { '@id': `${origin}/#agent` },
  }

  const schemas: object[] = [brokerage, agent, website]

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