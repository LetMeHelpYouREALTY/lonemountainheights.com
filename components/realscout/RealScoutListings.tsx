import Link from 'next/link'
import type { DomainConfig } from '@/lib/domain-config'
import { calendlyUrl } from '@/lib/calendly'
import { realScoutPriceBand } from '@/lib/domain-site'

type Props = {
  config: DomainConfig
}

export default function RealScoutListings({ config }: Props) {
  const { priceMin, priceMax } = realScoutPriceBand(config)
  const priceMaxAttr = priceMax ? ` price-max="${priceMax}"` : ''
  const neighborhood = config.neighborhood

  return (
    <section className="py-16 md:py-24 bg-slate-50" aria-labelledby="realscout-listings-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 id="realscout-listings-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {config.pageType === 'luxury' ? `${neighborhood} luxury listings` : 'Featured properties'}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              {config.pageType === 'luxury'
                ? `Curated MLS homes from $${(priceMin / 1000).toFixed(0)}K+ in ${neighborhood} and nearby Northwest Las Vegas.`
                : `Discover exceptional homes in ${neighborhood} and the Las Vegas Valley.`}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-slate-300 bg-white px-5 py-2.5 rounded-md font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Schedule a showing
          </Link>
        </div>

        <div
          className="realscout-widget-wrap min-h-[320px] rounded-xl bg-white p-4 shadow-sm"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings agent-encoded-id="${config.realscoutAgentId}" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC" price-min="${priceMin}"${priceMaxAttr}></realscout-office-listings>`,
          }}
        />

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Listing data is provided by the Greater Las Vegas Association of REALTORS® MLS (GLVAR) and is deemed reliable
          but not guaranteed. © {new Date().getFullYear()} GLVAR. All rights reserved. Information is for consumers’
          personal, non-commercial use.
        </p>

        <div className="mt-8 text-center">
          <a
            href={calendlyUrl(config.domain, 'tour', 'after-listings', 'home')}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a showing
            <span className="sr-only"> (opens Calendly in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}