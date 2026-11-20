import Script from "next/script";

/** Loads RealScout web components once per page view (CSP allows em + www). */
export function RealScoutScript() {
  return (
    <Script
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="lazyOnload"
    />
  );
}