import { Separator } from "@/components/ui/separator"
import {
  PreviewGroup,
  PreviewLabel,
} from "@/features/catalog/components/layout/preview-group"
import { PreviewLayout } from "@/features/catalog/components/layout/preview-layout"

export function SeparatorPreview() {
  return (
    <PreviewLayout narrow={false}>
      <PreviewGroup title="Horizontal" contentClassName="space-y-4">
        <div className="space-y-2">
          <PreviewLabel>Solid</PreviewLabel>
          <Separator />
        </div>
        <div className="space-y-2">
          <PreviewLabel>Dashed</PreviewLabel>
          <Separator variant="dashed" />
        </div>
        <div className="space-y-2">
          <PreviewLabel>Dotted</PreviewLabel>
          <Separator variant="dotted" />
        </div>
      </PreviewGroup>

      <PreviewGroup title="Vertical">
        <div className="flex h-8 items-center gap-4 text-sm">
          <span>Components</span>
          <Separator orientation="vertical" />
          <span>Blocks</span>
          <Separator orientation="vertical" variant="dashed" />
          <span>Charts</span>
          <Separator orientation="vertical" variant="dotted" />
          <span>Docs</span>
        </div>
      </PreviewGroup>
    </PreviewLayout>
  )
}
