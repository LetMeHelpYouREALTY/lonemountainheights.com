/** Approved Calendly scheduling URLs (scheduling_url values). */
export const CALENDLY_EVENTS = {
  tour: 'https://calendly.com/drjanduffy/showing',
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
} as const

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS

/**
 * Domain-tagged Calendly URL for FUB Worker source mapping.
 * utm_source is the bare hostname (no www).
 */
export function calendlyUrl(
  domain: string,
  event: CalendlyEvent,
  medium: string,
  campaign: string,
): string {
  const source = domain.replace(/^www\./, '').toLowerCase() || 'heyberkshire.com'
  const url = new URL(CALENDLY_EVENTS[event])
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', medium)
  if (event === 'buyer') {
    url.searchParams.set('utm_content', campaign)
  } else {
    url.searchParams.set('utm_campaign', campaign)
  }
  return url.toString()
}