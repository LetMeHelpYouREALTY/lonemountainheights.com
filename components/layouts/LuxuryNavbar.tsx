"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

type LuxuryNavbarProps = {
	phoneDisplay?: string;
	phoneTel?: string;
	scheduleHref: string;
};

export function LuxuryNavbar({
	phoneDisplay = "(702) 222-1964",
	phoneTel = "tel:+17022221964",
	scheduleHref,
}: LuxuryNavbarProps) {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-[var(--lmh-border)] bg-[rgba(18,18,18,0.96)] backdrop-blur-md">
			<div className="container mx-auto flex min-h-[4.5rem] items-center justify-between gap-4 px-4 py-2">
				<Link href="/" className="flex min-w-0 items-center gap-3 no-underline">
					<Image
						src="/images/agent/dr-jan-duffy.jpg"
						alt="Dr. Jan Duffy, REALTOR®"
						width={48}
						height={48}
						className="h-12 w-12 shrink-0 rounded-full border border-[var(--lmh-gold)] object-cover"
						priority
					/>
					<div className="min-w-0">
						<span className="block truncate font-semibold text-white">Dr. Jan Duffy</span>
						<span className="block truncate text-xs text-slate-400">
							Lone Mountain Heights · BHHS Nevada
						</span>
					</div>
				</Link>

				<nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
					<Link href="/listings" className="text-sm text-slate-300 hover:text-white">
						Listings
					</Link>
					<Link href="/about" className="text-sm text-slate-300 hover:text-white">
						About
					</Link>
					<Link href="/contact" className="text-sm text-slate-300 hover:text-white">
						Contact
					</Link>
					<a href={phoneTel} className="text-sm font-medium text-[var(--lmh-gold)]">
						{phoneDisplay}
					</a>
					<a
						href={scheduleHref}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-md bg-[var(--lmh-gold)] px-4 py-2 text-sm font-semibold text-[#121212] hover:opacity-90"
					>
						Schedule
					</a>
				</nav>

				<button
					type="button"
					className="rounded-md border border-[var(--lmh-border)] p-2 text-white md:hidden"
					aria-expanded={open}
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{open ? (
				<div className="border-t border-[var(--lmh-border)] bg-[#121212] px-4 py-4 md:hidden">
					<div className="flex flex-col gap-3">
						<Link href="/listings" className="text-slate-200" onClick={() => setOpen(false)}>
							Listings
						</Link>
						<Link href="/about" className="text-slate-200" onClick={() => setOpen(false)}>
							About
						</Link>
						<Link href="/contact" className="text-slate-200" onClick={() => setOpen(false)}>
							Contact
						</Link>
						<a href={phoneTel} className="inline-flex items-center gap-2 text-[var(--lmh-gold)]">
							<Phone className="h-4 w-4" />
							{phoneDisplay}
						</a>
						<a
							href={scheduleHref}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-md bg-[var(--lmh-gold)] px-4 py-3 text-center font-semibold text-[#121212]"
						>
							Schedule consultation
						</a>
					</div>
				</div>
			) : null}
		</header>
	);
}