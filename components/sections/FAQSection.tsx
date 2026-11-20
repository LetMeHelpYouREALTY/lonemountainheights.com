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
    question: "What areas do you serve?",
    answer:
      "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Our expertise covers residential, luxury, and investment properties throughout Southern Nevada.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Typically, the home buying process takes 30-45 days from offer acceptance to closing. However, this can vary based on financing, inspections, and other factors. We'll guide you through each step to ensure a smooth transaction.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes! We provide free, no-obligation home valuations using current market data and comparable sales. This helps you understand your home's value whether you're considering selling or just curious about your investment.",
  },
  {
    question: "What makes you different from other real estate agents?",
    answer:
      "Serving Las Vegas since 2008 with 500+ successful transactions, we combine deep local market knowledge with personalized service. As part of Berkshire Hathaway HomeServices, we have access to extensive resources and technology to serve you better.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Absolutely! We specialize in investment real estate including rental properties, fix-and-flip opportunities, and commercial properties. We'll help you identify profitable opportunities and navigate the investment process.",
  },
  {
    question: "What are your fees?",
    answer:
      "For buyers, our services are typically free as commissions are paid by the seller. For sellers, we offer competitive commission structures. Contact us for a personalized consultation to discuss your specific situation.",
  },
];

interface FAQSectionProps {
  /** Custom FAQs to display (defaults to defaultFaqs) */
  faqs?: FAQ[];
  /** Custom title for the section */
  title?: string;
  /** Custom subtitle for the section */
  subtitle?: string;
  className?: string;
  variant?: "light" | "dark";
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our real estate services",
  className = "",
  variant = "light",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 md:py-24 ${isDark ? "bg-[#121212]" : "bg-white"} ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {title}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg mb-4 overflow-hidden ${isDark ? "border-[#2a2a2a]" : "border-slate-200"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${isDark ? "hover:bg-[#1a1a1a]" : "hover:bg-slate-50"}`}
              >
                <span className={`font-semibold pr-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp
                    className={`h-5 w-5 flex-shrink-0 ${isDark ? "text-[#c9a962]" : "text-blue-600"}`}
                  />
                ) : (
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
                )}
              </button>
              {openIndex === index && (
                <div
                  className={`px-6 py-4 border-t ${isDark ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-slate-50 border-slate-200"}`}
                >
                  <p className={isDark ? "text-slate-300" : "text-slate-700"}>{faq.answer}</p>
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
