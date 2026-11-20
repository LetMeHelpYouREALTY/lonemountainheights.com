import Script from 'next/script'

/** RealScout web components UMD (em.realscout.com); API calls use www.realscout.com per CSP. */
export function RealScoutScripts() {
  return (
    <Script
      id="realscout-web-components"
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="afterInteractive"
    />
  )
}