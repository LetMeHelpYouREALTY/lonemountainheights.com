import Script from 'next/script'

/** Load Calendly assets once site-wide (CSP allows assets.calendly.com). */
export function CalendlyScripts() {
  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  )
}