import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Home } from "lucide-react";
import AgentPortrait from "@/components/brand/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { AGENT, BRAND, CALENDLY, REALSCOUT } from "@/lib/brand";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1e3a8a] to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AgentPortrait size="lg" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Ready to tour {BRAND.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a private showing on Calendly — or call Dr. Jan Duffy directly. No forms. No runaround.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CalendlyButton
              url={CALENDLY.showing}
              text="Book on Calendly"
              className="inline-flex items-center justify-center bg-[#c9a227] text-slate-900 px-6 py-3 rounded-md font-bold hover:bg-[#d4af37] transition-colors no-underline"
            />
            <Button asChild size="lg" className="bg-white text-[#1e3a8a] hover:bg-blue-50">
              <a
                href={REALSCOUT.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 no-underline"
              >
                <Home className="h-5 w-5" />
                Browse Properties
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href={AGENT.phoneTel} className="flex items-center gap-2 no-underline">
                <Phone className="h-5 w-5" />
                {AGENT.phone}
              </Link>
            </Button>
          </div>

          <p className="text-blue-100 text-sm">
            {BRAND.subscript} · {AGENT.brokerage} · License {AGENT.license}
          </p>
        </div>
      </div>
    </section>
  );
}
