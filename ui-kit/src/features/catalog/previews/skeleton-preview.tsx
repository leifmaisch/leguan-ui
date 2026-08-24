import { Skeleton } from "@/components/ui/skeleton"

function SkeletonLayout({ variant }: { variant?: "solid" | "dotted" | "shimmer" }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton variant={variant} className="size-12 rounded-full" />
        <div className="flex-1 space-y-2">
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

export function SkeletonPreview() {
  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium">Default</p>
        <SkeletonLayout />
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium">Variants</p>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Solid</p>
            <SkeletonLayout variant="solid" />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Dotted</p>
            <SkeletonLayout variant="dotted" />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Shimmer</p>
            <SkeletonLayout variant="shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}
