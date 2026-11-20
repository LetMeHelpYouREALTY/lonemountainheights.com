import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { AGENT, BRAND, OFFICE } from "@/lib/brand";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  const isLoneMountain =
    config.neighborhood === "Lone Mountain Heights" ||
    domain.includes("lonemountainheights") ||
    !domain;

  const title = isLoneMountain
    ? `${BRAND.name} Homes for Sale | ${BRAND.subscript}`
    : `${config.neighborhood} | ${BRAND.subscript}`;

  const description = isLoneMountain ? BRAND.description : config.description;

  return {
    title: {
      default: title,
      template: `%s | ${BRAND.name}`,
    },
    description,
    keywords: isLoneMountain ? [...BRAND.keywords] : config.keywords,
    authors: [{ name: AGENT.name }],
    openGraph: {
      title,
      description,
      type: "website",
      url: BRAND.url,
      siteName: BRAND.fullName,
      images: [
        {
          url: AGENT.portrait,
          width: 1270,
          height: 1282,
          alt: AGENT.portraitAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [AGENT.portrait],
    },
    icons: {
      icon: [
        { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    },
    metadataBase: new URL(BRAND.url),
    alternates: {
      canonical: BRAND.url,
    },
    other: {
      "geo.region": "US-NV",
      "geo.placename": "Lone Mountain Heights, Las Vegas",
      "geo.position": "36.2365;-115.2825",
      ICBM: "36.2365, -115.2825",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: BRAND.fullName,
    image: `${BRAND.url}${AGENT.portrait}`,
    url: BRAND.url,
    telephone: AGENT.phoneTel.replace("tel:", ""),
    email: AGENT.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE.street,
      addressLocality: OFFICE.city,
      addressRegion: OFFICE.state,
      postalCode: OFFICE.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: OFFICE.lat,
      longitude: OFFICE.lng,
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Lone Mountain Heights",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89129",
        },
      },
      { "@type": "City", name: "Las Vegas" },
      { "@type": "City", name: "Henderson" },
    ],
    employee: {
      "@type": "Person",
      name: AGENT.name,
      jobTitle: AGENT.title,
      telephone: AGENT.phoneTel.replace("tel:", ""),
      image: `${BRAND.url}${AGENT.portrait}`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <Script id="widget-tracker" strategy="afterInteractive">{`
          if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");}
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <Analytics />
        {/* RealScout — load once globally */}
        <Script src="https://em.realscout.com/widgets/realscout-web-components.js" type="module" strategy="afterInteractive" />
        {/* Calendly — load once globally */}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
