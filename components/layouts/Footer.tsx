import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import AgentPortrait from "@/components/brand/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { AGENT, BRAND, CALENDLY, OFFICE, REALSCOUT } from "@/lib/brand";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="mb-4 [&_span]:text-white [&_.text-slate-900]:text-white">
              <BrandLogo variant="footer" showPortrait />
            </div>
            <p className="text-slate-300 mb-4 text-sm">
              Luxury gated living in Northwest Las Vegas 89129. {BRAND.subscript} —{" "}
              {AGENT.brokerage}.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <AgentPortrait size="sm" />
              <div className="text-sm">
                <p className="font-semibold text-white">{AGENT.name}</p>
                <p className="text-slate-400">License {AGENT.license}</p>
              </div>
            </div>
            <CalendlyButton
              url={CALENDLY.showing}
              text="Schedule a Tour"
              className="inline-flex items-center justify-center bg-[#c9a227] text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#d4af37] transition-colors no-underline"
            />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={REALSCOUT.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  All Properties
                </a>
              </li>
              <li>
                <Link
                  href="/neighborhoods/lone-mountain-heights"
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  Lone Mountain Heights
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  All Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/market-report"
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  Market Report
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Real Estate Services</h3>
            <ul className="space-y-2">
              {[
                ["/buyers", "Home Buying"],
                ["/sellers", "Home Selling"],
                ["/luxury-homes", "Luxury Homes"],
                ["/home-valuation", "Home Valuation"],
                ["/relocation", "Relocation"],
                ["/new-construction", "New Construction"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#c9a227] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {OFFICE.street}
                  <br />
                  {OFFICE.city}, {OFFICE.state} {OFFICE.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#c9a227] flex-shrink-0" />
                <Link
                  href={AGENT.phoneTel}
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  {AGENT.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#c9a227] flex-shrink-0" />
                <Link
                  href={`mailto:${AGENT.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm no-underline"
                >
                  {AGENT.email}
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href={OFFICE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a227] hover:underline no-underline"
              >
                Directions
              </a>
              <a
                href={OFFICE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a227] hover:underline no-underline"
              >
                View Google Reviews
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {BRAND.name}. {BRAND.subscript}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors no-underline">
                FAQ
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-slate-400 hover:text-white transition-colors no-underline"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            {AGENT.name}, {AGENT.title} | License {AGENT.license} | {AGENT.brokerage}
          </p>
          <p className="text-slate-600 text-xs mt-2 text-center max-w-3xl mx-auto">
            Serving {BRAND.name} and Northwest Las Vegas with Berkshire Hathaway HomeServices —
            trust, ethical standards, and financial strength.
          </p>
        </div>
      </div>
    </footer>
  );
}
