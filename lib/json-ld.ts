/** Safe JSON-LD serialization for script tags (Next.js / XSS hygiene). */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}