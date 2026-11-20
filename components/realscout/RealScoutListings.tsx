import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RealScoutScript } from "@/components/realscout/RealScoutScript";

type RealScoutListingsProps = {
  agentEncodedId?: string;
  title?: string;
  subtitle?: string;
  priceMin?: string;
  priceMax?: string;
};

export default function RealScoutListings({
  agentEncodedId = "QWdlbnQtMjI1MDUw",
  title = "Featured Properties",
  subtitle = "Discover exceptional homes in Las Vegas and Henderson",
  priceMin = "500000",
  priceMax = "800000",
}: RealScoutListingsProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <RealScoutScript />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            <p className="text-slate-600 text-lg">{subtitle}</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
              View All Properties
            </a>
          </Button>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="${agentEncodedId}" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC" 
              price-min="${priceMin}" 
              price-max="${priceMax}"
            ></realscout-office-listings>`,
          }}
        />
      </div>
    </section>
  );
}
