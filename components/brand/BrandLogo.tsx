import Link from "next/link";
import Image from "next/image";
import { BRAND, AGENT } from "@/lib/brand";

type BrandLogoProps = {
  variant?: "nav" | "footer" | "hero";
  className?: string;
  showPortrait?: boolean;
};

export default function BrandLogo({
  variant = "nav",
  className = "",
  showPortrait = true,
}: BrandLogoProps) {
  const titleSize =
    variant === "hero"
      ? "text-3xl md:text-5xl lg:text-6xl"
      : variant === "footer"
        ? "text-xl"
        : "text-lg md:text-xl";

  const subSize =
    variant === "hero" ? "text-sm md:text-base" : "text-[11px] md:text-xs";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 no-underline hover:no-underline focus:ring-0 ${className}`}
      aria-label={`${BRAND.name} — ${BRAND.subscript}`}
    >
      {showPortrait && (
        <span className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-[#c9a227]/40 shadow-sm">
          <Image
            src={AGENT.portrait}
            alt={AGENT.portraitAlt}
            width={variant === "hero" ? 72 : 44}
            height={variant === "hero" ? 72 : 44}
            className={
              variant === "hero"
                ? "h-[72px] w-[72px] object-cover"
                : "h-11 w-11 object-cover"
            }
            priority={variant === "nav"}
          />
        </span>
      )}
      <span className="flex flex-col leading-tight">
        <span
          className={`${titleSize} font-semibold tracking-tight text-slate-900 group-hover:text-[#1e3a8a] transition-colors`}
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {BRAND.name}
        </span>
        <span
          className={`${subSize} tracking-[0.12em] uppercase text-[#c9a227] font-medium`}
        >
          {BRAND.subscript}
        </span>
      </span>
    </Link>
  );
}
