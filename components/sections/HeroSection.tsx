"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import BrandLogo from "@/components/brand/BrandLogo";
import AgentPortrait from "@/components/brand/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { AGENT, BRAND, CALENDLY } from "@/lib/brand";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const images = [
    "/Image/hero_bg_1.jpg",
    "/Image/hero_bg_2.jpg",
    "/Image/hero_bg_3.jpg",
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion, images.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 ${
              prefersReducedMotion ? "" : "transition-opacity duration-1000"
            } ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt={`Lone Mountain Heights Las Vegas luxury homes — view ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-[#1e3a8a]/40" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-4 md:px-12 lg:px-20 py-28">
        <div className="mb-8 [&_.text-slate-900]:text-white">
          <BrandLogo variant="hero" showPortrait />
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {BRAND.name}
          <span className="block text-[#c9a227] text-2xl md:text-3xl mt-2 tracking-wide">
            {BRAND.subscript}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Gated Northwest Las Vegas living near Lone Mountain — private tours,
          live MLS, and direct access to {AGENT.name}.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <CalendlyButton
            url={CALENDLY.showing}
            text="Book a Private Showing"
            className="inline-flex items-center justify-center bg-[#c9a227] text-slate-900 px-6 py-3 rounded-md font-bold no-underline hover:bg-[#d4af37]"
          />
          <a
            href={AGENT.phoneTel}
            className="inline-flex items-center text-white font-semibold no-underline hover:underline"
          >
            Call {AGENT.phone}
          </a>
          <AgentPortrait size="md" className="sm:ml-2" />
        </div>
      </div>
    </div>
  );
}
