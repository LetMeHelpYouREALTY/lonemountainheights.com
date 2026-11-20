import Link from "next/link";
import AgentPortrait from "@/components/brand/AgentPortrait";
import { BRAND, REALSCOUT, AGENT, CALENDLY } from "@/lib/brand";
import CalendlyButton from "@/components/calendly/CalendlyButton";

type RealScoutOfficeSectionProps = {
  title?: string;
  subtitle?: string;
  priceMin?: string;
  priceMax?: string;
};

/**
 * RealScout office listings — placed directly below the hero on every page.
 */
export default function RealScoutOfficeSection({
  title = `${BRAND.name} Homes for Sale`,
  subtitle = "Live MLS listings curated for Northwest Las Vegas and Lone Mountain Heights buyers.",
  priceMin = "500000",
  priceMax = "1200000",
}: RealScoutOfficeSectionProps) {
  return (
    <section
      id="listings"
      aria-label="Lone Mountain Heights office listings"
      className="relative py-14 md:py-18 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="flex items-start gap-4 max-w-3xl">
            <AgentPortrait size="md" className="hidden sm:block shrink-0 mt-1" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#c9a227] font-semibold mb-2">
                Live MLS · RealScout Office
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {title}
              </h2>
              <p className="text-slate-600 text-base md:text-lg">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <CalendlyButton
              url={CALENDLY.showing}
              text="Book a Private Showing"
              className="inline-flex items-center justify-center bg-[#1e3a8a] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#1e40af] transition-colors no-underline"
            />
            <Link
              href={REALSCOUT.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-5 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors no-underline"
            >
              Open Full Search
            </Link>
          </div>
        </div>

        <div
          className="realscout-office-host"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="${REALSCOUT.agentId}" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC" 
              price-min="${priceMin}" 
              price-max="${priceMax}"
            ></realscout-office-listings>`,
          }}
        />

        <p className="mt-6 text-center text-sm text-slate-500">
          Guided by {AGENT.name} · {AGENT.brokerage} · License {AGENT.license}
        </p>
      </div>
    </section>
  );
}
