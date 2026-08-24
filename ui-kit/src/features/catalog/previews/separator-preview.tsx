import { Separator } from "@/components/ui/separator"

export function SeparatorPreview() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium">Horizontal</p>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Solid</p>
            <Separator />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Dashed</p>
            <Separator variant="dashed" />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Dotted</p>
            <Separator variant="dotted" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium">Vertical</p>
        <div className="flex h-8 items-center gap-4 text-sm">
          <span>Components</span>
          <Separator orientation="vertical" />
          <span>Blocks</span>
          <Separator orientation="vertical" variant="dashed" />
          <span>Charts</span>
          <Separator orientation="vertical" variant="dotted" />
          <span>Docs</span>
        </div>
      </div>
    </div>
  )
}
