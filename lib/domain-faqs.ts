import type { DomainConfig } from './domain-config'
import type { FAQ } from '@/components/sections/FAQSection'

const LONE_MOUNTAIN_HEIGHTS_FAQS: FAQ[] = [
  {
    question: 'What price range are Lone Mountain Heights homes?',
    answer:
      'Lone Mountain Heights in Northwest Las Vegas (89129) typically lists from the mid-$600,000s into the multi-millions, depending on lot size, custom build, views, and finished square footage. Dr. Jan Duffy reviews active and recent closed sales in the Heights before you tour.',
  },
  {
    question: 'How is Lone Mountain Heights different from nearby Skye Canyon or Centennial Hills?',
    answer:
      'Lone Mountain Heights is an established custom-home area on the Lone Mountain ridgeline with larger lots and estate-style architecture. Skye Canyon and Centennial Hills are master-planned communities with newer tract and semi-custom inventory. Your commute, lot size goals, and HOA preferences usually determine the best fit.',
  },
  {
    question: 'Do Lone Mountain Heights homes have HOA restrictions?',
    answer:
      'Many parcels sit in HOA-governed enclaves with architectural guidelines, while some lots carry lighter oversight. Review the recorded CC&Rs, design guidelines, and any pending assessments in the resale package before you write an offer.',
  },
  {
    question: 'How do I schedule a private tour in Lone Mountain Heights?',
    answer:
      'Book a buyer consultation or showing through Dr. Jan Duffy’s online calendar, or call 702-222-1964. Most luxury listings require an appointment with listing access instructions.',
  },
  {
    question: 'Can Dr. Jan Duffy help me sell a Lone Mountain Heights property?',
    answer:
      'Yes. Listing strategy includes positioning for view premiums, prep for luxury photography, and pricing against recent Heights sales. Schedule a listing consultation to review timing, net sheet, and marketing.',
  },
]

export function faqsForDomain(config: DomainConfig): FAQ[] | undefined {
  if (config.domain === 'lonemountainheights.com') {
    return LONE_MOUNTAIN_HEIGHTS_FAQS
  }
  return undefined
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}