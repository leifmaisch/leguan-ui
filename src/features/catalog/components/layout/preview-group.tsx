import { cn } from "@/lib/utils"

type PreviewGroupProps = {
  title?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function PreviewGroup({
  title,
  children,
  className,
  contentClassName,
}: PreviewGroupProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {title ? <p className="text-sm font-medium">{title}</p> : null}
      {contentClassName ? (
        <div className={contentClassName}>{children}</div>
      ) : (
        children
      )}
    </div>
  )
}

export function PreviewLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-muted-foreground">{children}</p>
}
