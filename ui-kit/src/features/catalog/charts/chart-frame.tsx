import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type ChartFrameProps = {
  children: ReactNode
  className?: string
  height?: "sm" | "md" | "lg"
}

const heightClasses = {
  sm: "h-36",
  md: "h-44",
  lg: "h-72",
}

export function ChartFrame({
  children,
  className,
  height = "md",
}: ChartFrameProps) {
  return (
    <div className={cn("w-full", heightClasses[height], className)}>
      {children}
    </div>
  )
}
