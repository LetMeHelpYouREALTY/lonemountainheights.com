import FAQSection from '@/components/sections/FAQSection'
import { faqJsonLd, faqsForDomain } from '@/lib/domain-faqs'
import { defaultFaqs } from '@/lib/faqs'
import { jsonLdString } from '@/lib/json-ld'
import type { DomainConfig } from '@/lib/domain-config'

export function HomeFAQBlock({ config }: { config: DomainConfig }) {
  const faqs = faqsForDomain(config) ?? defaultFaqs
  const title =
    config.domain === 'lonemountainheights.com'
      ? 'Lone Mountain Heights buyer & seller FAQ'
      : 'Frequently Asked Questions'
  const subtitle =
    config.domain === 'lonemountainheights.com'
      ? 'Answers about luxury homes, tours, and listings in the 89129 Heights area'
      : 'Get answers to common questions about our real estate services'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(faqs)) }} />
      <FAQSection faqs={faqs} title={title} subtitle={subtitle} />
    </>
  )
}