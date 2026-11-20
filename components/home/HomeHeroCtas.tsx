"use client";

import CalendlyButton from "@/components/calendly/CalendlyButton";
import Link from "next/link";
import { Phone } from "lucide-react";

type HomeHeroCtasProps = {
  calendlyUrl?: string;
};

export function HomeHeroCtas({
  calendlyUrl = "https://calendly.com/drjanduffy/appointment",
}: HomeHeroCtasProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="tel:+17022221964"
        className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors"
      >
        <Phone className="h-5 w-5 mr-2" />
        Call 702-222-1964
      </a>
      <CalendlyButton
        url={calendlyUrl}
        text="Schedule a consultation"
        className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
      />
      <Link
        href="/contact"
        className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
      >
        Contact & directions
      </Link>
    </div>
  );
}