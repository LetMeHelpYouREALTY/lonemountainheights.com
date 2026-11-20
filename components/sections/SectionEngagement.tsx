import Link from "next/link";
import AgentPortrait from "@/components/brand/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { AGENT, BRAND, CALENDLY } from "@/lib/brand";

type SectionEngagementProps = {
  headline?: string;
  body?: string;
  variant?: "light" | "dark" | "gold";
};

/**
 * Compact engagement strip with agent portrait + Calendly CTA.
 * Place at the end of content sections to lift conversion.
 */
export default function SectionEngagement({
  headline = `Ready to explore ${BRAND.name}?`,
  body = "Book a private tour or market briefing with Dr. Jan Duffy — no forms, just a real conversation.",
  variant = "light",
}: SectionEngagementProps) {
  const styles =
    variant === "dark"
      ? "bg-slate-900 text-white border-slate-800"
      : variant === "gold"
        ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
        : "bg-white text-slate-900 border-slate-200";

  const muted = variant === "light" ? "text-slate-600" : "text-white/80";

  return (
    <div
      className={`my-10 md:my-12 rounded-xl border px-5 py-6 md:px-8 md:py-7 flex flex-col sm:flex-row items-center gap-5 ${styles}`}
    >
      <AgentPortrait size="sm" className="shrink-0" />
      <div className="flex-1 text-center sm:text-left">
        <h3
          className="text-xl font-semibold mb-1"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {headline}
        </h3>
        <p className={`text-sm md:text-base ${muted}`}>{body}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <CalendlyButton
          url={CALENDLY.showing}
          text="Book Showing"
          className="inline-flex items-center justify-center bg-[#c9a227] text-slate-900 px-5 py-2.5 rounded-md font-semibold hover:bg-[#d4af37] transition-colors no-underline"
        />
        <Link
          href={AGENT.phoneTel}
          className={`inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold border transition-colors no-underline ${
            variant === "light"
              ? "border-slate-300 text-slate-800 hover:bg-slate-50"
              : "border-white/40 text-white hover:bg-white/10"
          }`}
        >
          Call {AGENT.phone}
        </Link>
      </div>
    </div>
  );
}
