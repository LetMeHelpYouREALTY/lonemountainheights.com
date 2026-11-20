import type { DomainConfig } from '@/lib/domain-config'

type Props = {
  config: DomainConfig
  title?: string
  subtitle?: string
}

/** MLS search bar — intended directly under the hero, not inside it. */
export default function RealScoutSimpleSearch({
  config,
  title = 'Search homes',
  subtitle,
}: Props) {
  const defaultSubtitle =
    config.pageType === 'luxury'
      ? `Active ${config.neighborhood} and Northwest Las Vegas luxury listings`
      : `Active ${config.neighborhood} area listings from Dr. Jan's MLS feed`

  return (
    <section
      className="py-10 md:py-12 bg-white border-b border-slate-200"
      aria-labelledby="realscout-search-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 id="realscout-search-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          {title}
        </h2>
        <p className="text-slate-600 mb-6">{subtitle ?? defaultSubtitle}</p>
        <div className="flex justify-center min-h-[56px]">
          <div
            className="realscout-widget-wrap w-full max-w-3xl"
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
            }}
          />
        </div>
      </div>
    </section>
  )
}