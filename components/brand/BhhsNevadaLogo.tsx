import Image from 'next/image'
import Link from 'next/link'
import { BROKERAGE_LOGO_PATH, BROKERAGE_NAME, BROKERAGE_URL } from '@/lib/brokerage'

type Props = {
  /** Fixed height in px; width scales with the lockup aspect ratio (~5.67:1). */
  height?: number
  className?: string
  link?: boolean
  priority?: boolean
}

export function BhhsNevadaLogo({
  height = 36,
  className = '',
  link = true,
  priority = false,
}: Props) {
  const width = Math.round(height * (4096 / 722))
  const img = (
    <Image
      src={BROKERAGE_LOGO_PATH}
      alt={BROKERAGE_NAME}
      width={width}
      height={height}
      className={`h-auto w-auto max-w-[min(280px,70vw)] object-contain object-left ${className}`}
      style={{ maxHeight: height }}
      priority={priority}
    />
  )

  if (!link) {
    return img
  }

  return (
    <Link
      href={BROKERAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
      aria-label={`${BROKERAGE_NAME} (opens in a new tab)`}
    >
      {img}
    </Link>
  )
}