"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

// Default FAQs for the section
export const defaultFaqs: FAQ[] = [
  {
    question: "Where is Lone Mountain Heights?",
    answer:
      "Lone Mountain Heights is a gated residential community in Northwest Las Vegas ZIP 89129, near Lone Mountain Regional Park and trail access, with convenient connections via US-95.",
  },
  {
    question: "What is the typical home price in Lone Mountain Heights?",
    answer:
      "Recent listings often fall in the mid-to-high $600Ks through the $700Ks, with an estimated community median near $749,900. Exact values depend on size, condition, upgrades, and views.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days depending on inspections and title.",
  },
  {
    question: "Do you help with home valuations in Lone Mountain Heights?",
    answer:
      "Yes. Dr. Jan Duffy provides free CMAs using current MLS comps for Lone Mountain Heights and the broader 89129 corridor. Book a valuation consult on Calendly.",
  },
  {
    question: "What makes Dr. Jan Duffy different?",
    answer:
      "Serving Las Vegas since 2008 with 500+ transactions and $127M+ closed, she combines hyperlocal Lone Mountain Heights knowledge with Berkshire Hathaway HomeServices resources — and you reach her directly.",
  },
  {
    question: "How do I schedule a showing?",
    answer:
      "Book a private showing on Calendly or call (702) 222-1964. There are no website forms — scheduling is direct.",
  },
];

interface FAQSectionProps {
  /** Custom FAQs to display (defaults to defaultFaqs) */
  faqs?: FAQ[];
  /** Custom title for the section */
  title?: string;
  /** Custom subtitle for the section */
  subtitle?: string;
  /** Whether to include JSON-LD schema (handled separately by FAQSchema component) */
  className?: string;
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our real estate services",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Helper to generate FAQ schema data from FAQ array
 * Use with FAQSchema component: <FAQSchema faqs={getFAQSchemaData(faqs)} />
 */
export function getFAQSchemaData(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}
