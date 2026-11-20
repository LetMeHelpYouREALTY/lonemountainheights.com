import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { getDomainConfig } from '@/lib/domain-config'
import { siteOrigin } from '@/lib/domain-site'

export default function sitemap(): MetadataRoute.Sitemap {
  const host = headers().get('host') || 'heyberkshire.com'
  const config = getDomainConfig(host)
  const baseUrl = siteOrigin(config)
  const lastModified = new Date()

  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/listings`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/why-berkshire-hathaway`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/market-report`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/llms.txt`, priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  const servicePages = [
    { url: `${baseUrl}/buyers`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/sellers`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/luxury-homes`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/home-valuation`, priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const neighborhoodPages = [
    { url: `${baseUrl}/neighborhoods`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/neighborhoods/summerlin`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/neighborhoods/henderson`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/neighborhoods/centennial-hills`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/neighborhoods/skye-canyon`, priority: 0.7, changeFrequency: 'weekly' as const },
  ]

  if (config.domain === 'lonemountainheights.com') {
    neighborhoodPages.push({
      url: `${baseUrl}/neighborhoods/lone-mountain-heights`,
      priority: 0.95,
      changeFrequency: 'weekly' as const,
    })
  }

  const allPages = [...corePages, ...servicePages, ...neighborhoodPages]

  return allPages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}