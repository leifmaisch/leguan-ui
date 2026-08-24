import { surfaceDepth } from "@/lib/surface-depth"
import { cn } from "@/lib/utils"

type PreviewSurfaceVariant = "card" | "muted" | "inline" | "version"

type PreviewSurfaceProps = {
  variant?: PreviewSurfaceVariant
  children: React.ReactNode
  className?: string
}

const variantClassNames: Record<
  Exclude<PreviewSurfaceVariant, "inline">,
  string
> = {
  card: cn("rounded-squircle-lg border bg-card p-6", surfaceDepth("lg")),
  muted: "rounded-squircle-lg border bg-muted/20 p-4",
  version: "rounded-lg border border-border/60 bg-muted/20 px-3 py-3",
}

export function PreviewSurface({
  variant = "card",
  children,
  className,
}: PreviewSurfaceProps) {
  if (variant === "inline") {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn(variantClassNames[variant], className)}>{children}</div>
  )
}
