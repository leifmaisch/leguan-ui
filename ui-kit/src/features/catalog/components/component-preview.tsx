import { cn } from "@/lib/utils"

type ComponentPreviewProps = {
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-runde text-lg font-semibold tracking-tight">Preview</h2>
      <div
        className={cn(
          "rounded-xl border bg-card p-6 shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}
