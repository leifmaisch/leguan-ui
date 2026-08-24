"use client"

import { Check, Copy } from "@phosphor-icons/react"
import { useState } from "react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import type { CatalogComponentMeta } from "@/features/catalog/constants/components"
import { getComponentVersions } from "@/features/catalog/constants/component-versions"
import {
  VersionPreview,
  hasVersionPreview,
  versionPreviewClassName,
} from "@/features/catalog/components/component-version-preview"
import { surfaceDepth } from "@/lib/surface-depth"
import { cn } from "@/lib/utils"

type ComponentVersionsProps = {
  component: CatalogComponentMeta
}

function CompactCode({ usage, code }: { usage: string; code: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-start gap-2 rounded-lg bg-muted/50 px-2.5 py-2">
      <code className="min-w-0 flex-1 truncate font-mono text-[11px] leading-5 text-muted-foreground">
        {usage}
      </code>
      <Button
        type="button"
        variant="ghost"
        size="icon-xs"
        onClick={handleCopy}
        className="shrink-0 text-muted-foreground hover:text-foreground"
        aria-label="Copy code"
      >
        {copied ? (
          <Check weight={iconWeight} />
        ) : (
          <Copy weight={iconWeight} />
        )}
      </Button>
    </div>
  )
}

export function ComponentVersions({ component }: ComponentVersionsProps) {
  const versions = getComponentVersions(component)
  const hasPreview = hasVersionPreview(component.slug)

  return (
    <section className="space-y-3">
      <h2 className="font-runde text-lg font-semibold tracking-tight">Versions</h2>

      <div
        className={cn(
          "grid gap-3",
          versions.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-sm"
        )}
      >
        {versions.map((version) => (
          <article
            key={version.id}
            className={cn(
              "flex flex-col gap-2.5 rounded-xl border bg-card p-3",
              surfaceDepth("md")
            )}
          >
            {hasPreview ? (
              <div
                className={cn(
                  "rounded-lg border border-border/60 bg-muted/20 px-3 py-3",
                  versionPreviewClassName(component.slug)
                )}
              >
                <VersionPreview slug={component.slug} versionId={version.id} />
              </div>
            ) : null}

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">{version.label}</p>
              <CompactCode usage={version.usage} code={version.code} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
