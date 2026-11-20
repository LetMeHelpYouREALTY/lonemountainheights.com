import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || headers().get("host") || "";
  const config = getDomainConfig(domain);
  const canonicalHost = config.domain !== "default" ? config.domain : "heyberkshire.com";
  const siteUrl = `https://www.${canonicalHost.replace(/^www\./, "")}`;

  return {
    metadataBase: new URL(siteUrl),
    title: `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`,
    description: config.description,
    keywords: config.keywords,
    icons: {
      icon: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
      apple: [{ url: "/images/agent/dr-jan-duffy.jpg", sizes: "180x180", type: "image/jpeg" }],
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      url: siteUrl,
      images: [{ url: "/images/agent/dr-jan-duffy.jpg", alt: "Dr. Jan Duffy, REALTOR®" }],
    },
    alternates: { canonical: siteUrl },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
