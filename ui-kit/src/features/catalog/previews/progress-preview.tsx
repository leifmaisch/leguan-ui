"use client"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export function ProgressPreview() {
  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium">With label</p>
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
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium">Appearances</p>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Solid</p>
            <Progress value={65} appearance="solid">
              <ProgressLabel className="text-xs">Solid</ProgressLabel>
              <ProgressValue />
            </Progress>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Dashed</p>
            <Progress value={65} appearance="dashed">
              <ProgressLabel className="text-xs">Dashed</ProgressLabel>
              <ProgressValue />
            </Progress>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Dotted</p>
            <Progress value={65} appearance="dotted">
              <ProgressLabel className="text-xs">Dotted</ProgressLabel>
              <ProgressValue />
            </Progress>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Striped</p>
            <Progress value={65} appearance="striped">
              <ProgressLabel className="text-xs">Striped</ProgressLabel>
              <ProgressValue />
            </Progress>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium">Sizes</p>
        <div className="space-y-3">
          <Progress value={60} size="sm">
            <ProgressLabel className="text-xs">Small</ProgressLabel>
          </Progress>
          <Progress value={60} size="default">
            <ProgressLabel className="text-xs">Default</ProgressLabel>
          </Progress>
          <Progress value={60} size="lg">
            <ProgressLabel className="text-xs">Large</ProgressLabel>
          </Progress>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium">Colors</p>
        <div className="space-y-3">
          <Progress value={45} variant="default">
            <ProgressLabel className="text-xs">Default</ProgressLabel>
          </Progress>
          <Progress value={45} variant="secondary">
            <ProgressLabel className="text-xs">Secondary</ProgressLabel>
          </Progress>
          <Progress value={45} variant="destructive">
            <ProgressLabel className="text-xs">Destructive</ProgressLabel>
          </Progress>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium">Indeterminate</p>
        <div className="space-y-3">
          <Progress value={null} appearance="solid">
            <ProgressLabel className="text-xs">Solid</ProgressLabel>
          </Progress>
          <Progress value={null} appearance="dashed">
            <ProgressLabel className="text-xs">Dashed</ProgressLabel>
          </Progress>
          <Progress value={null} appearance="dotted">
            <ProgressLabel className="text-xs">Dotted</ProgressLabel>
          </Progress>
        </div>
      </div>
    </div>
  )
}
