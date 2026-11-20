import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { getDomainConfig } from '@/lib/domain-config'
import { CLIENT_PHONE_DISPLAY, siteOrigin } from '@/lib/domain-site'

export const dynamic = 'force-dynamic'

export async function GET() {
  const host = headers().get('x-domain') || headers().get('host') || 'heyberkshire.com'
  const config = getDomainConfig(host)
  const origin = siteOrigin(config)

  const lines = [
    `# ${config.neighborhood} | Dr. Jan Duffy`,
    '',
    `> ${config.description}`,
    '',
    '## Contact',
    `- Phone: ${CLIENT_PHONE_DISPLAY}`,
    `- Office: 7475 W Sahara Ave, Suite 100, Las Vegas, NV 89117`,
    `- Site: ${origin}`,
    '',
    '## Primary pages',
    `- Home: ${origin}/`,
    `- Contact / schedule: ${origin}/contact`,
    `- About: ${origin}/about`,
    `- Home valuation: ${origin}/home-valuation`,
    '',
  ]

  if (config.domain === 'lonemountainheights.com') {
    lines.push(
      '## Lone Mountain Heights (89129)',
      '- Custom luxury homes and estate lots on the Lone Mountain ridgeline in Northwest Las Vegas.',
      '- MLS search and listings appear on the homepage under the hero via RealScout.',
      '- Buyer FAQ on the homepage covers pricing bands, HOAs, and scheduling tours.',
      '',
    )
  }

  lines.push(
    '## Agent',
    '- Dr. Jan Duffy, REALTOR®, License S.0197614.LLC',
    '- Berkshire Hathaway HomeServices Nevada Properties',
  )

  return new NextResponse(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}