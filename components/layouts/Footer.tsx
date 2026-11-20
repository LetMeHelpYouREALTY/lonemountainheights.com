import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { isLmhRequest } from "@/lib/request-host";
import { LMH_NAP } from "@/lib/lone-mountain-heights";

export default async function Footer() {
	const currentYear = new Date().getFullYear();
	const isLmh = isLmhRequest();
	const phoneDisplay = isLmh ? LMH_NAP.phoneDisplay : "(702) 500-1942";
	const phoneTel = isLmh ? `tel:${LMH_NAP.phoneTel}` : "tel:+17025001942";
	const email = isLmh ? LMH_NAP.email : "homes@heyberkshire.com";

	return (
		<footer className="bg-slate-900 text-white">
			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
					<div>
						<h3 className="mb-4 text-xl font-bold">Berkshire Hathaway HomeServices</h3>
						<p className="mb-4 text-sm text-slate-300">
							Nevada Properties - Your trusted real estate partner in Las Vegas, Henderson, and
							Summerlin. Backed by Warren Buffett&apos;s legacy of trust.
						</p>
						<div className="flex space-x-4">
							<a
								href="http://drjanduffy.realscout.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 transition-colors hover:text-white"
								aria-label="Search Las Vegas Homes"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								href="http://drjanduffy.realscout.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 transition-colors hover:text-white"
								aria-label="Search Las Vegas Homes"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href="http://drjanduffy.realscout.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 transition-colors hover:text-white"
								aria-label="Search Las Vegas Homes"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-bold">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="http://drjanduffy.realscout.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									All Properties
								</a>
							</li>
							<li>
								<Link
									href="/neighborhoods"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Neighborhoods
								</Link>
							</li>
							<li>
								<Link
									href="/why-berkshire-hathaway"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Why BHHS
								</Link>
							</li>
							<li>
								<Link
									href="/market-report"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Market Report
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									About Dr. Jan
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-bold">Real Estate Services</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/buyers"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Home Buying
								</Link>
							</li>
							<li>
								<Link
									href="/buyers/california-relocator"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									California Relocators
								</Link>
							</li>
							<li>
								<Link
									href="/sellers"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Home Selling
								</Link>
							</li>
							<li>
								<Link
									href="/luxury-homes"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Luxury Homes
								</Link>
							</li>
							<li>
								<Link
									href="/55-plus-communities"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									55+ Communities
								</Link>
							</li>
							<li>
								<Link
									href="/new-construction"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									New Construction
								</Link>
							</li>
							<li>
								<Link
									href="/market-insights"
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									Market Insights
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-bold">Contact Dr. Jan Duffy</h3>
						<ul className="space-y-3">
							<li className="flex items-start">
								<MapPin className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
								<span className="text-sm text-slate-300">
									9406 W Lake Mead Blvd, Suite 100
									<br />
									Las Vegas, NV 89134
								</span>
							</li>
							<li className="flex items-center">
								<Phone className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
								<a href={phoneTel} className="text-sm text-slate-300 transition-colors hover:text-white">
									{phoneDisplay}
								</a>
							</li>
							<li className="flex items-center">
								<Mail className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400" />
								<a
									href={`mailto:${email}`}
									className="text-sm text-slate-300 transition-colors hover:text-white"
								>
									{email}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-slate-800 pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-center text-sm text-slate-400 md:text-left">
							© {currentYear} Berkshire Hathaway HomeServices Nevada Properties. All Rights
							Reserved.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm">
							<Link href="/faq" className="text-slate-400 transition-colors hover:text-white">
								FAQ
							</Link>
							<Link href="/sitemap.xml" className="text-slate-400 transition-colors hover:text-white">
								Sitemap
							</Link>
						</div>
					</div>
					<p className="mt-4 text-center text-xs text-slate-500">
						Dr. Jan Duffy, REALTOR® | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
						Properties
					</p>
					<p className="mx-auto mt-2 max-w-3xl text-center text-xs text-slate-600">
						When you work with a Berkshire Hathaway HomeServices agent, you&apos;re backed by a name
						synonymous with trust, ethical standards, and financial strength.
					</p>
				</div>
			</div>
		</footer>
	);
}
