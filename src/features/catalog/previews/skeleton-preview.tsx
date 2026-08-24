import { Skeleton } from "@/components/ui/skeleton"
import { PreviewGroup } from "@/features/catalog/components/layout/preview-group"

function SkeletonLayout({
  variant,
}: {
  variant?: "solid" | "dotted" | "shimmer"
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton variant={variant} className="size-12 shrink-0 rounded-full" />
        <div className="min-w-0 flex-1 space-y-2">
          <Skeleton variant={variant} className="h-4 w-3/5" />
          <Skeleton variant={variant} className="h-3 w-2/5" />
        </div>
      </div>
      <Skeleton variant={variant} className="h-32 w-full rounded-xl" />
      <div className="flex gap-2">
        <Skeleton variant={variant} className="h-8 w-20 rounded-lg" />
        <Skeleton variant={variant} className="h-8 w-20 rounded-lg" />
      </div>
    </div>
  )
}

const skeletonVariants: Array<{
  label: string
  variant?: "solid" | "dotted" | "shimmer"
}> = [
  { label: "Solid" },
  { label: "Dotted", variant: "dotted" },
  { label: "Shimmer", variant: "shimmer" },
]

export function SkeletonPreview() {
  return (
    <div className="space-y-8">
      <PreviewGroup title="Shapes">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="size-10 rounded-full" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </PreviewGroup>

      <PreviewGroup title="Variants">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skeletonVariants.map((item) => (
            <div
              key={item.label}
              className="space-y-3 rounded-lg border border-border/60 bg-muted/20 p-4"
            >
              <p className="text-sm font-medium">{item.label}</p>
              <SkeletonLayout variant={item.variant} />
            </div>
          ))}
        </div>
      </PreviewGroup>
    </div>
  )
}
