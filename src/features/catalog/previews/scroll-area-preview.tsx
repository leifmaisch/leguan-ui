import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  PreviewGroup,
  PreviewLabel,
} from "@/features/catalog/components/layout/preview-group"
import { PreviewLayout } from "@/features/catalog/components/layout/preview-layout"

const tags = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "shadcn",
  "Base UI",
  "Motion",
  "Phosphor Icons",
  "Squircle",
  "Design System",
  "Components",
  "Charts",
  "Forms",
  "Dialogs",
  "Tooltips",
]

export function ScrollAreaPreview() {
  return (
    <PreviewLayout narrow={false}>
      <PreviewGroup title="Vertical">
        <div className="space-y-2">
          <PreviewLabel>Scrollable list</PreviewLabel>
          <ScrollArea className="h-48 rounded-squircle-md border">
            <div className="p-4">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="border-b border-border/60 py-2 text-sm last:border-0"
                >
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </PreviewGroup>

      <PreviewGroup title="Horizontal">
        <div className="space-y-2">
          <PreviewLabel>Scrollable row</PreviewLabel>
          <ScrollArea className="w-full rounded-squircle-md border">
            <div className="flex w-max gap-3 p-4">
              {tags.slice(0, 8).map((tag) => (
                <span
                  key={tag}
                  className="rounded-squircle-sm border bg-muted/40 px-3 py-1.5 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </PreviewGroup>
    </PreviewLayout>
  )
}
