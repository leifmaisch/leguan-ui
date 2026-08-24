import { cn } from "@/lib/utils"

type LeguanLogoProps = {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: 24,
  md: 28,
  lg: 32,
} as const

export function LeguanLogo({ className, size = "md" }: LeguanLogoProps) {
  const dimension = sizeMap[size]

  return (
    <img
      src="/leguan-logo.png"
      alt="Leguan"
      width={dimension}
      height={dimension}
      className={cn("shrink-0", className)}
      style={{ width: dimension, height: dimension }}
    />
  )
}
