"use client"

import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import {
  Avatar,
  AvatarDottext,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  AsciiBackground,
  demoSeedByShape,
} from "@/components/ui/background"
import { asciiShapes } from "@/components/ui/background/patterns"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getChartVersionPreview,
  hasChartVersionPreview,
  isChartSlug,
} from "@/features/catalog/charts/version-previews"
import { cn } from "@/lib/utils"

const accentButtonClass =
  "before:hidden border-transparent shadow-[0_1px_2px_rgb(0_0_0/0.08)] active:shadow-none hover:opacity-100 bg-[#FFEA00] text-black hover:bg-[#E6D400] active:bg-[#D4C200]"

type VersionPreviewProps = {
  slug: string
  versionId: string
}

export function VersionPreview({ slug, versionId }: VersionPreviewProps) {
  if (slug === "buttons") {
    if (versionId === "pill") {
      return <Button size="sm">Get started</Button>
    }

    if (versionId === "squircle") {
      return (
        <Button size="sm" shape="squircle">
          <ArrowUpRightIcon weight={iconWeight} />
          Get started
        </Button>
      )
    }

    if (versionId === "accent") {
      return (
        <Button size="sm" shape="squircle" className={accentButtonClass}>
          <ArrowUpRightIcon weight={iconWeight} />
          Get started
        </Button>
      )
    }
  }

  if (slug === "avatars") {
    if (versionId === "text") {
      return (
        <Avatar>
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
      )
    }

    if (versionId === "dottext") {
      return (
        <Avatar>
          <AvatarDottext>AL</AvatarDottext>
        </Avatar>
      )
    }

    if (versionId === "squircle") {
      return (
        <Avatar shape="squircle">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )
    }

    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }

  if (slug === "separator") {
    const variant =
      versionId === "dashed" || versionId === "dotted" ? versionId : "solid"

    return <Separator variant={variant} className="w-full" />
  }

  if (slug === "skeleton") {
    const variant =
      versionId === "dotted" || versionId === "shimmer" ? versionId : "solid"

    return (
      <div className="w-full space-y-2">
        <Skeleton variant={variant} className="h-4 w-full" />
        <Skeleton variant={variant} className="h-4 w-4/5" />
        <Skeleton variant={variant} className="h-4 w-3/5" />
      </div>
    )
  }

  if (slug === "ascii-background") {
    const shape = asciiShapes.find((value) => value === versionId)

    if (shape) {
      return (
        <AsciiBackground
          shape={shape}
          seed={demoSeedByShape[shape]}
          variant="compact"
          className="aspect-[2.2/1] w-full rounded-lg"
        />
      )
    }
  }

  if (slug === "tabs" && versionId === "default") {
    return (
      <Tabs defaultValue="overview" className="w-full max-w-xs">
        <TabsList className="w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="sr-only" />
      </Tabs>
    )
  }

  const ChartPreview = getChartVersionPreview(slug, versionId)
  if (ChartPreview) {
    return <ChartPreview />
  }

  return null
}

export function versionPreviewClassName(slug: string) {
  return cn(
    slug === "ascii-background" ||
      slug === "tabs" ||
      slug === "separator" ||
      slug === "skeleton" ||
      isChartSlug(slug)
      ? "w-full"
      : "flex justify-center"
  )
}

export function hasVersionPreview(slug: string) {
  return (
    slug === "ascii-background" ||
    slug === "buttons" ||
    slug === "avatars" ||
    slug === "tabs" ||
    slug === "separator" ||
    slug === "skeleton" ||
    hasChartVersionPreview(slug)
  )
}
