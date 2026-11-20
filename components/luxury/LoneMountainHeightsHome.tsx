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
	buildLmhAgentJsonLd,
	buildLmhFaqJsonLd,
	buildLmhPlaceJsonLd,
	LMH_FAQ,
	serializeJsonLd,
} from "@/lib/lone-mountain-heights";

type LoneMountainHeightsHomeProps = {
	config: DomainConfig;
};

export function LoneMountainHeightsHome({ config }: LoneMountainHeightsHomeProps) {
	const siteUrl = `https://www.${config.domain}`;
	const consultUrl = buildCalendlyUrl("buyer-consultation-30-min", "home-hero");
	const showingUrl = buildCalendlyUrl("showing", "home-tour");

	const jsonLd = [
		buildLmhAgentJsonLd(siteUrl),
		buildLmhPlaceJsonLd(siteUrl),
		buildLmhFaqJsonLd(LMH_FAQ),
	];

	return (
		<div className="lmh-luxury min-h-screen bg-[#121212] text-slate-100">
			{jsonLd.map((block, index) => (
				<script
					key={index}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: serializeJsonLd(block) }}
				/>
			))}

			<LuxuryNavbar scheduleHref={consultUrl} />

			<main>
				{/* Hero — no RealScout inside; listings band follows */}
				<section className="relative overflow-hidden border-b border-[var(--lmh-border)]">
					<div
						className="absolute inset-0 bg-cover bg-center opacity-40"
						style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/70 to-[#121212]" />
					<div className="relative container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:items-center">
						<div>
							{config.ctaBadge ? (
								<span className="inline-block rounded-full border border-[var(--lmh-gold)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--lmh-gold)]">
									{config.ctaBadge}
								</span>
							) : null}
							<h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
								{config.heroHeadline}
							</h1>
							<p className="mt-6 max-w-xl text-lg text-slate-300">{config.heroSubheadline}</p>
							<p className="mt-4 max-w-xl text-base text-slate-400">
								<strong className="text-slate-200">Answer:</strong> Dr. Jan Duffy represents
								buyers and sellers in Lone Mountain Heights and Northwest Las Vegas with
								Berkshire Hathaway HomeServices Nevada Properties—search live listings below,
								then schedule online.
							</p>
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
								<a href="tel:+17022221964" className="rounded-md px-2 py-3 font-semibold text-[var(--lmh-gold)]">
									(702) 222-1964
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
								<div className="p-5 space-y-4">
									<BhhsNevadaMark variant="light" />
									<p className="font-semibold text-white">Dr. Jan Duffy, REALTOR®</p>
									<p className="mt-1 text-sm text-slate-400">
										License S.0197614.LLC · Serving Northwest Las Vegas since 2008
									</p>
									<p className="mt-3 text-sm text-slate-300">
										5.0★ on Realtor.com (50 reviews) · No generic web forms—schedule through
										Calendly or call direct.
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

				{/* GEO context (no fabricated market stats) */}
				<section className="py-16 md:py-20" aria-labelledby="lmh-geo-heading">
					<div className="container mx-auto max-w-4xl px-4">
						<h2 id="lmh-geo-heading" className="text-3xl font-semibold text-white">
							Lone Mountain Heights at a glance
						</h2>
						<p className="mt-4 text-slate-300">
							Lone Mountain Heights is a Northwest Las Vegas neighborhood along the Lone
							Mountain corridor, with foothill views and access to the 215 beltway, Summerlin,
							and Centennial Hills. Clark County School District serves the area.
						</p>
						<ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
							<li>Primarily single-family homes with desert and mountain outlooks</li>
							<li>Convenient to Craig Ranch Regional Park and Northwest recreation</li>
							<li>Buyer and seller representation with Dr. Jan Duffy—not a builder sales office</li>
						</ul>
						<p className="mt-6 text-sm text-slate-500">
							Market pricing changes weekly—use the MLS search above or schedule a consultation for
							current comps near your target streets.
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
							<Link href="/contact" className="rounded-md border border-slate-500 px-8 py-4 text-white">
								Office &amp; map
							</Link>
						</div>
						<p className="mt-6 text-sm text-slate-500">
							Dr. Jan Duffy · License S.0197614.LLC · Berkshire Hathaway HomeServices Nevada
							Properties
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}