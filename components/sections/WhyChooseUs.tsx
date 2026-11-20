import { Shield, TrendingUp, Users, Award, Clock, Home } from "lucide-react";
import AgentPortrait from "@/components/brand/AgentPortrait";
import SectionEngagement from "@/components/sections/SectionEngagement";
import { BRAND } from "@/lib/brand";

const features = [
  {
    icon: Shield,
    title: "Gated-community expertise",
    description: `Street-level comps for ${BRAND.name} and the 89129 corridor — not metro averages.`,
  },
  {
    icon: TrendingUp,
    title: "Market timing",
    description: "Pricing and offer strategy tuned to thin Northwest Las Vegas inventory.",
  },
  {
    icon: Users,
    title: "Direct access",
    description: "Talk to Dr. Jan Duffy — book on Calendly or call. No phone trees.",
  },
  {
    icon: Award,
    title: "Proven results",
    description: "500+ transactions and $127M+ closed since 2008 across the Las Vegas Valley.",
  },
  {
    icon: Clock,
    title: "Responsive",
    description: "Fast answers on showings, inspections, and negotiation checkpoints.",
  },
  {
    icon: Home,
    title: "Full service",
    description: "Buy, sell, relocate, and value — one Berkshire Hathaway HomeServices advisor.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <AgentPortrait size="lg" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Why work with Dr. Jan on Lone Mountain Heights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hyperlocal guidance for a gated Northwest Las Vegas community — backed by Berkshire
            Hathaway HomeServices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="relative mb-4">
                  <AgentPortrait size="sm" className="mb-3" />
                  <div className="bg-blue-100 rounded-full p-3 inline-flex">
                    <Icon className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionEngagement
            headline="Let's map your Lone Mountain Heights options"
            body="Book a consult — buyers and sellers welcome."
          />
        </div>
      </div>
    </section>
  );
}
