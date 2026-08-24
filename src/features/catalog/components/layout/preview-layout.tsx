import { cn } from "@/lib/utils"

type PreviewLayoutProps = {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export function PreviewLayout({
  children,
  className,
  narrow = true,
}: PreviewLayoutProps) {
  return (
    <div
      className={cn(
        "space-y-8",
        narrow && "mx-auto w-full max-w-md",
        className
      )}
    >
      {children}
    </div>
  )
}
