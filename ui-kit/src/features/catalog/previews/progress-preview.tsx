"use client"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import {
  PreviewGroup,
  PreviewLabel,
} from "@/features/catalog/components/layout/preview-group"
import { PreviewLayout } from "@/features/catalog/components/layout/preview-layout"

export function ProgressPreview() {
  return (
    <PreviewLayout>
      <PreviewGroup title="With label">
        <Progress value={72}>
          <ProgressLabel>Storage used</ProgressLabel>
          <ProgressValue />
        </Progress>
        <Progress value={34}>
          <ProgressLabel>Upload progress</ProgressLabel>
          <ProgressValue />
        </Progress>
        <Progress value={100}>
          <ProgressLabel>Sync complete</ProgressLabel>
          <ProgressValue />
        </Progress>
      </PreviewGroup>

      <PreviewGroup title="Appearances" contentClassName="space-y-3">
        <div className="space-y-2">
          <PreviewLabel>Solid</PreviewLabel>
          <Progress value={65} appearance="solid">
            <ProgressLabel className="text-xs">Solid</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
        <div className="space-y-2">
          <PreviewLabel>Dashed</PreviewLabel>
          <Progress value={65} appearance="dashed">
            <ProgressLabel className="text-xs">Dashed</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
        <div className="space-y-2">
          <PreviewLabel>Dotted</PreviewLabel>
          <Progress value={65} appearance="dotted">
            <ProgressLabel className="text-xs">Dotted</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
        <div className="space-y-2">
          <PreviewLabel>Striped</PreviewLabel>
          <Progress value={65} appearance="striped">
            <ProgressLabel className="text-xs">Striped</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      </PreviewGroup>

      <PreviewGroup title="Sizes" contentClassName="space-y-3">
        <Progress value={60} size="sm">
          <ProgressLabel className="text-xs">Small</ProgressLabel>
        </Progress>
        <Progress value={60} size="default">
          <ProgressLabel className="text-xs">Default</ProgressLabel>
        </Progress>
        <Progress value={60} size="lg">
          <ProgressLabel className="text-xs">Large</ProgressLabel>
        </Progress>
      </PreviewGroup>

      <PreviewGroup title="Colors" contentClassName="space-y-3">
        <Progress value={45} variant="default">
          <ProgressLabel className="text-xs">Default</ProgressLabel>
        </Progress>
        <Progress value={45} variant="secondary">
          <ProgressLabel className="text-xs">Secondary</ProgressLabel>
        </Progress>
        <Progress value={45} variant="destructive">
          <ProgressLabel className="text-xs">Destructive</ProgressLabel>
        </Progress>
      </PreviewGroup>

      <PreviewGroup title="Indeterminate" contentClassName="space-y-3">
        <Progress value={null} appearance="solid">
          <ProgressLabel className="text-xs">Solid</ProgressLabel>
        </Progress>
        <Progress value={null} appearance="dashed">
          <ProgressLabel className="text-xs">Dashed</ProgressLabel>
        </Progress>
        <Progress value={null} appearance="dotted">
          <ProgressLabel className="text-xs">Dotted</ProgressLabel>
        </Progress>
      </PreviewGroup>
    </PreviewLayout>
  )
}
