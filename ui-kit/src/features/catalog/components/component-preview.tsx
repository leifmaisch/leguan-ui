import { surfaceDepth } from "@/lib/surface-depth"
import { cn } from "@/lib/utils"

type ComponentPreviewProps = {
  children: React.ReactNode
  className?: string
  framed?: boolean
}

export function ComponentPreview({
  children,
  className,
  framed = true,
}: ComponentPreviewProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-runde text-lg font-semibold tracking-tight">Preview</h2>
      {framed ? (
        <div
          className={cn(
            "rounded-squircle-lg border bg-card p-6",
            surfaceDepth("lg"),
            className
          )}
        >
          {children}
        </div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </section>
  )
}
