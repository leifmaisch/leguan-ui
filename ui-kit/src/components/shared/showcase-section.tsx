import { cn } from "@/lib/utils"

type ShowcaseSectionProps = {
  id: string
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export function ShowcaseSection({
  id,
  title,
  description,
  children,
  className,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <div className="space-y-1">
        <h2 className="font-runde text-lg font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
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
