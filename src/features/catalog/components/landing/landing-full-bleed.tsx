import { cn } from "@/lib/utils"

type LandingFullBleedProps = {
  children: React.ReactNode
  className?: string
}

export function LandingFullBleed({ children, className }: LandingFullBleedProps) {
  return (
    <div
      className={cn(
        "min-w-0 -mx-3 w-[calc(100%+1.5rem)] max-w-none overflow-x-clip sm:-mx-4 sm:w-[calc(100%+2rem)] md:-mx-6 md:w-[calc(100%+3rem)]",
        className
      )}
    >
      {children}
    </div>
  )
}
