import Image from 'next/image'
import { agentHeadshotPath } from '@/lib/domain-site'

type Props = {
  className?: string
  priority?: boolean
  sizes?: string
}

export function AgentPortrait({
  className = 'relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 400px',
}: Props) {
  return (
    <div className={className}>
      <Image
        src={agentHeadshotPath()}
        alt="Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties"
        fill
        className="object-cover object-top"
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}