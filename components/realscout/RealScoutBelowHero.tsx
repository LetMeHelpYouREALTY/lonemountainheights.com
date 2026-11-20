import { RealScoutScript } from "@/components/realscout/RealScoutScript";

type RealScoutBelowHeroProps = {
	agentEncodedId: string;
	neighborhood: string;
	priceMin?: string;
	priceMax?: string;
};

export function RealScoutBelowHero({
	agentEncodedId,
	neighborhood,
	priceMin = "350000",
	priceMax = "1500000",
}: RealScoutBelowHeroProps) {
	return (
		<section
			className="border-y border-[var(--lmh-border,#2a2a2a)] bg-[var(--lmh-surface,#1a1a1a)] py-12 md:py-16"
			aria-labelledby="lmh-listings-heading"
		>
			<RealScoutScript />
			<div className="container mx-auto px-4">
				<header className="mx-auto mb-8 max-w-3xl text-center">
					<p className="text-sm font-semibold uppercase tracking-widest text-[var(--lmh-gold,#c9a962)]">
						Live MLS search
					</p>
					<h2 id="lmh-listings-heading" className="mt-2 text-3xl font-bold text-white md:text-4xl">
						{neighborhood} homes for sale
					</h2>
					<p className="mt-3 text-base text-slate-300">
						Search current listings, then book a showing or buyer consultation with Dr. Jan
						Duffy.
					</p>
				</header>

				<div className="mx-auto mb-10 flex max-w-2xl justify-center">
					<div
						dangerouslySetInnerHTML={{
							__html: `<realscout-simple-search agent-encoded-id="${agentEncodedId}"></realscout-simple-search>`,
						}}
					/>
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