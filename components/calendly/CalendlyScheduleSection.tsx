import AgentPortrait from "@/components/brand/AgentPortrait";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { AGENT, BRAND, CALENDLY } from "@/lib/brand";

type CalendlyScheduleSectionProps = {
  title?: string;
  subtitle?: string;
  url?: string;
  height?: string;
};

/**
 * Sitewide Calendly engagement block — replaces lead forms.
 */
export default function CalendlyScheduleSection({
  title = "Schedule with Dr. Jan Duffy",
  subtitle = `Tour ${BRAND.name}, get a valuation, or plan your Northwest Las Vegas move — pick a time that works.`,
  url = CALENDLY.showing,
  height = "700px",
}: CalendlyScheduleSectionProps) {
  return (
    <section
      id="schedule"
      aria-label="Schedule a consultation"
      className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(30,58,138,0.55), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(201,162,39,0.25), transparent 45%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <AgentPortrait size="lg" className="mb-5" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a227] font-semibold mb-3">
            Book Directly · No Forms
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {title}
          </h2>
          <p className="text-slate-300 max-w-2xl text-lg">{subtitle}</p>
          <a
            href={AGENT.phoneTel}
            className="mt-4 text-[#c9a227] font-semibold no-underline hover:underline"
          >
            Or call {AGENT.phone}
          </a>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
          <CalendlyWidget url={url} height={height} />
        </div>
      </div>
    </section>
  );
}
