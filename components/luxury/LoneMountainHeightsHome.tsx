import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layouts/Footer";
import { LuxuryNavbar } from "@/components/layouts/LuxuryNavbar";
import { RealScoutBelowHero } from "@/components/realscout/RealScoutBelowHero";
import FAQSection from "@/components/sections/FAQSection";
import type { DomainConfig } from "@/lib/domain-config";
import { BhhsNevadaMark } from "@/components/brand/BhhsNevadaMark";
import {
	buildCalendlyUrl,
	buildLmhSiteGraphJsonLd,
	LMH_AEO_ANSWERS,
	LMH_FAQ,
	LMH_NAP,
	serializeJsonLd,
} from "@/lib/lone-mountain-heights";

type LoneMountainHeightsHomeProps = {
	config: DomainConfig;
};

export function LoneMountainHeightsHome({ config }: LoneMountainHeightsHomeProps) {
	const siteUrl = LMH_NAP.siteUrl;
	const consultUrl = buildCalendlyUrl("buyer-consultation-30-min", "home-hero");
	const showingUrl = buildCalendlyUrl("showing", "home-tour");
	const graph = buildLmhSiteGraphJsonLd(siteUrl);

	return (
		<div className="lmh-luxury min-h-screen bg-[#121212] text-slate-100">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
			/>

			<LuxuryNavbar scheduleHref={consultUrl} />

			<main>
				<section className="relative overflow-hidden border-b border-[var(--lmh-border)]">
					<div
						className="absolute inset-0 bg-cover bg-center opacity-40"
						style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/70 to-[#121212]" />
					<div className="relative container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:items-center">
						<div>
							<p className="font-serif text-2xl text-[var(--lmh-gold)] md:text-3xl">
								Lone Mountain Heights
							</p>
							<h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
								{config.heroHeadline}
							</h1>
							<p className="mt-6 max-w-xl text-lg text-slate-300">{config.heroSubheadline}</p>
							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href={consultUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-md bg-[var(--lmh-gold)] px-6 py-3 font-semibold text-[#121212] hover:opacity-90"
								>
									Schedule a consultation
								</a>
								<a
									href={showingUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-md border border-slate-500 px-6 py-3 font-semibold text-white hover:border-white"
								>
									Book a showing
								</a>
								<a
									href={`tel:${LMH_NAP.phoneTel}`}
									className="rounded-md px-2 py-3 font-semibold text-[var(--lmh-gold)]"
								>
									{LMH_NAP.phoneDisplay}
								</a>
							</div>
						</div>

						<aside className="mx-auto w-full max-w-sm">
							<div className="overflow-hidden rounded-2xl border border-[var(--lmh-border)] bg-[var(--lmh-surface)] shadow-xl">
								<Image
									src="/images/agent/dr-jan-duffy.jpg"
									alt="Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties"
									width={480}
									height={480}
									className="h-auto w-full object-cover"
									priority
								/>
								<div className="space-y-4 p-5">
									<BhhsNevadaMark variant="light" />
									<p className="font-semibold text-white">Dr. Jan Duffy, REALTOR®</p>
									<p className="text-sm text-slate-400">
										License {LMH_NAP.license} · {LMH_NAP.addressFull}
									</p>
									<p className="text-sm text-slate-300">
										<a href={`tel:${LMH_NAP.phoneTel}`} className="text-[var(--lmh-gold)]">
											{LMH_NAP.phoneDisplay}
										</a>
										{" · "}
										<a href={`mailto:${LMH_NAP.email}`} className="underline">
											{LMH_NAP.email}
										</a>
									</p>
								</div>
							</div>
						</aside>
					</div>
				</section>

				<RealScoutBelowHero
					agentEncodedId={config.realscoutAgentId}
					neighborhood={config.neighborhood}
					priceMin="400000"
					priceMax="2000000"
				/>

				<section className="border-b border-[var(--lmh-border)] py-16 md:py-20" aria-labelledby="lmh-aeo-heading">
					<div className="container mx-auto max-w-4xl px-4">
						<h2 id="lmh-aeo-heading" className="text-3xl font-semibold text-white">
							Quick answers
						</h2>
						<p className="mt-3 text-slate-400">
							Direct answers for search and AI assistants—same facts as our FAQ schema.
						</p>
						<div className="mt-10 space-y-10">
							{LMH_AEO_ANSWERS.map((item) => (
								<div key={item.id}>
									<h3 className="text-xl font-semibold text-white">{item.heading}</h3>
									<p className="mt-3 text-slate-300">
										<strong className="text-slate-100">Answer: </strong>
										{item.answer}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-16 md:py-20" aria-labelledby="lmh-geo-heading">
					<div className="container mx-auto max-w-4xl px-4">
						<h2 id="lmh-geo-heading" className="text-3xl font-semibold text-white">
							Lone Mountain Heights at a glance
						</h2>
						<p className="mt-4 text-slate-300">
							<strong className="text-slate-100">Answer: </strong>
							Lone Mountain Heights is a Northwest Las Vegas neighborhood along the Lone Mountain
							corridor, with foothill views and access to the 215 beltway, Summerlin, and Centennial
							Hills. Clark County School District serves the area.
						</p>
						<ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
							<li>Primarily single-family homes with desert and mountain outlooks</li>
							<li>Convenient to Craig Ranch Regional Park and Northwest recreation</li>
							<li>
								Buyer and seller representation with Dr. Jan Duffy—not a builder sales office
							</li>
						</ul>
						<p className="mt-6 text-sm text-slate-500">
							Nearby:{" "}
							<Link href="/neighborhoods/centennial-hills" className="text-[var(--lmh-gold)] underline">
								Centennial Hills homes
							</Link>
							. Market pricing changes weekly—use the MLS search above or schedule a consultation for
							current comps.
						</p>
						<p className="mt-4 text-sm text-slate-500">
							Office: {LMH_NAP.addressFull} · {LMH_NAP.phoneDisplay}
						</p>
					</div>
				</section>

				<FAQSection
					faqs={LMH_FAQ}
					title="Lone Mountain Heights questions"
					subtitle="Structured for search and AI answer engines—answers match on-page FAQ schema."
					variant="dark"
				/>

				<section className="border-t border-[var(--lmh-border)] bg-[var(--lmh-surface)] py-16">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-semibold text-white">{config.ctaHeadline}</h2>
						<p className="mx-auto mt-4 max-w-2xl text-slate-300">{config.ctaSubheadline}</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<a
								href={consultUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-md bg-[var(--lmh-gold)] px-8 py-4 font-semibold text-[#121212]"
							>
								Schedule on Calendly
							</a>
							<Link
								href="/contact"
								className="rounded-md border border-slate-500 px-8 py-4 text-white"
							>
								Office &amp; map
							</Link>
						</div>
						<p className="mt-6 text-sm text-slate-500">
							{LMH_NAP.agentName} · License {LMH_NAP.license} · {LMH_NAP.brokerage} ·{" "}
							{LMH_NAP.phoneDisplay}
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
