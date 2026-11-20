import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { getSiteOrigin } from "@/lib/amenities";
import { RealScoutScript } from "@/components/realscout/RealScoutScript";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  const siteOrigin = getSiteOrigin(domain);
  return {
    metadataBase: new URL(siteOrigin),
    title: `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: siteOrigin,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: {
      icon: [{ url: "/Image/agent1.jpg", sizes: "32x32", type: "image/jpeg" }],
      apple: "/Image/agent1.jpg",
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      url: siteOrigin,
      siteName: config.neighborhood,
      locale: "en_US",
      images: [{ url: "/Image/agent1.jpg", alt: "Dr. Jan Duffy, REALTOR®" }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
      images: ["/Image/agent1.jpg"],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");}
        `}</Script>
      </head>
      <body>
        <RealScoutScript />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
