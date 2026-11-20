import Image from "next/image";
import { AGENT } from "@/lib/brand";

type AgentPortraitProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
};

const SIZE_MAP = {
  sm: 56,
  md: 96,
  lg: 160,
  xl: 240,
} as const;

export default function AgentPortrait({
  size = "md",
  className = "",
  priority = false,
}: AgentPortraitProps) {
  const px = SIZE_MAP[size];

  return (
    <div
      className={`relative overflow-hidden rounded-full ring-2 ring-[#c9a227]/50 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ${className}`}
      style={{ width: px, height: px }}
    >
      <Image
        src={AGENT.portrait}
        alt={AGENT.portraitAlt}
        width={px}
        height={px}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
