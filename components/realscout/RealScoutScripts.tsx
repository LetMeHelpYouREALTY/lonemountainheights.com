import Script from "next/script";

/** RealScout web components UMD (em.realscout.com); API calls use www.realscout.com per CSP. */
export function RealScoutScripts() {
  return (
    <>
      <link rel="preconnect" href="https://em.realscout.com" crossOrigin="" />
      <link rel="preconnect" href="https://www.realscout.com" crossOrigin="" />
      <Script
        id="realscout-web-components"
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
      />
    </>
  );
}
