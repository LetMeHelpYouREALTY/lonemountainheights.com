export interface FAQ {
  question: string;
  answer: string;
}

/** Default FAQs — server-safe (do not live in a client component). */
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
