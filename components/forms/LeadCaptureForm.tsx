/**
 * Lead capture is handled via Calendly (no custom forms).
 * This component remains as a drop-in replacement for legacy imports.
 */

import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import AgentPortrait from "@/components/brand/AgentPortrait";
import { AGENT, CALENDLY } from "@/lib/brand";

export interface LeadCaptureFormProps {
  source?: string;
  stage?: string;
  defaultTags?: string[];
  formType?: "contact" | "property-search" | "home-valuation" | "newsletter";
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function LeadCaptureForm({
  formType = "contact",
}: LeadCaptureFormProps) {
  const url =
    formType === "home-valuation" || formType === "property-search"
      ? CALENDLY.showing
      : CALENDLY.appointment;

  const headline =
    formType === "home-valuation"
      ? "Schedule Your Free Valuation"
      : formType === "property-search"
        ? "Book a Property Search Consult"
        : "Schedule with Dr. Jan Duffy";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <AgentPortrait size="sm" />
        <div>
          <h3 className="font-semibold text-slate-900">{headline}</h3>
          <p className="text-sm text-slate-600">
            No forms — pick a time. Or call{" "}
            <a href={AGENT.phoneTel} className="text-[#1e3a8a] font-medium">
              {AGENT.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
        <CalendlyWidget url={url} height="650px" />
      </div>
    </div>
  );
}

export default LeadCaptureForm;
