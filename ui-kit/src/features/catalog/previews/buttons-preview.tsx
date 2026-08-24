import {
  ArrowUpRightIcon,
  CircleNotchIcon,
  DownloadSimpleIcon,
  EnvelopeSimpleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SparkleIcon,
  StarIcon,
} from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const accentBase =
  "before:hidden border-transparent shadow-[0_1px_2px_rgb(0_0_0/0.08)] active:shadow-none hover:opacity-100"

const accentFilled = {
  yellow: cn(
    accentBase,
    "bg-[#FFEA00] text-black hover:bg-[#E6D400] active:bg-[#D4C200]"
  ),
  blue: cn(
    accentBase,
    "bg-[#0946A8] text-white hover:bg-[#0B55C2] active:bg-[#073478]"
  ),
  ocean: cn(
    accentBase,
    "bg-[#00C8FF] text-black hover:bg-[#00B0E6] active:bg-[#009ACC]"
  ),
  green: cn(
    accentBase,
    "bg-[#39FF14] text-black hover:bg-[#2EE010] active:bg-[#28CC0E]"
  ),
  purple: cn(
    accentBase,
    "bg-[#C44FFF] text-black hover:bg-[#B03FEE] active:bg-[#9C35D9]"
  ),
  pink: cn(
    accentBase,
    "bg-[#FF4FD4] text-black hover:bg-[#E645BE] active:bg-[#CC3DA8]"
  ),
  red: cn(
    accentBase,
    "bg-[#FF4747] text-black hover:bg-[#E63C3C] active:bg-[#CC3333]"
  ),
  neutral: cn(
    accentBase,
    "bg-[#262626] text-[#FAFAFA] hover:bg-[#3F3F46] active:bg-[#52525B] dark:bg-[#262626] dark:hover:bg-[#3F3F46]"
  ),
}

const accentOutline = {
  yellow: cn(
    accentBase,
    "shadow-none bg-[#FFEA00]/10 border-[#FFEA00]/25 text-[#8A7200] hover:bg-[#FFEA00]/15 dark:text-[#FFEA00]"
  ),
  blue: cn(
    accentBase,
    "shadow-none bg-[#0946A8]/10 border-[#0946A8]/25 text-[#0946A8] hover:bg-[#0946A8]/15 dark:text-[#5B9BFF]"
  ),
  ocean: cn(
    accentBase,
    "shadow-none bg-[#00C8FF]/10 border-[#00C8FF]/25 text-[#005C73] hover:bg-[#00C8FF]/15 dark:text-[#00C8FF]"
  ),
  green: cn(
    accentBase,
    "shadow-none bg-[#39FF14]/10 border-[#39FF14]/25 text-[#0D6600] hover:bg-[#39FF14]/15 dark:text-[#39FF14]"
  ),
  purple: cn(
    accentBase,
    "shadow-none bg-[#C44FFF]/10 border-[#C44FFF]/25 text-[#5A1F8F] hover:bg-[#C44FFF]/15 dark:text-[#C44FFF]"
  ),
  pink: cn(
    accentBase,
    "shadow-none bg-[#FF4FD4]/10 border-[#FF4FD4]/25 text-[#8B0068] hover:bg-[#FF4FD4]/15 dark:text-[#FF4FD4]"
  ),
  red: cn(
    accentBase,
    "shadow-none bg-[#FF4747]/10 border-[#FF4747]/25 text-[#8F1010] hover:bg-[#FF4747]/15 dark:text-[#FF4747]"
  ),
}

export function ButtonsPreview() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-3">
        <Button shape="squircle">Squircle</Button>
        <Button shape="squircle" variant="secondary">
          Secondary
        </Button>
        <Button shape="squircle" variant="outline">
          Outline
        </Button>
        <Button shape="squircle" variant="ghost">
          Ghost
        </Button>
        <Button shape="squircle" variant="destructive">
          Destructive
        </Button>
        <Button shape="squircle" size="icon" aria-label="Search">
          <MagnifyingGlassIcon weight={iconWeight} />
        </Button>
        <Button shape="squircle" size="icon-sm" aria-label="Add">
          <PlusIcon weight={iconWeight} />
        </Button>
        <Button shape="squircle" size="icon-lg" aria-label="Star">
          <StarIcon weight={iconWeight} />
        </Button>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-3">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon-xs" aria-label="Search">
          <MagnifyingGlassIcon weight={iconWeight} />
        </Button>
        <Button size="icon" aria-label="Search">
          <MagnifyingGlassIcon weight={iconWeight} />
        </Button>
        <Button size="icon-sm" aria-label="Add">
          <PlusIcon weight={iconWeight} />
        </Button>
        <Button size="icon-lg" aria-label="Star">
          <StarIcon weight={iconWeight} />
        </Button>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-3">
        <Button>
          <EnvelopeSimpleIcon weight={iconWeight} />
          Login with Email
        </Button>
        <Button shape="squircle">
          <ArrowUpRightIcon weight={iconWeight} />
          Launch
        </Button>
        <Button variant="outline">
          <SparkleIcon weight={iconWeight} />
          Upgrade
        </Button>
        <Button disabled>
          <CircleNotchIcon weight={iconWeight} className="animate-spin" />
          Loading
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-3">
        <Button shape="squircle" className={accentFilled.yellow}>
          <ArrowUpRightIcon weight={iconWeight} />
          Get started
        </Button>
        <Button shape="squircle" className={accentFilled.blue}>
          Blue
        </Button>
        <Button shape="squircle" className={accentFilled.ocean}>
          Ocean
        </Button>
        <Button shape="squircle" className={accentFilled.green}>
          <DownloadSimpleIcon weight={iconWeight} />
          Export
        </Button>
        <Button shape="squircle" className={accentFilled.purple}>
          Purple
        </Button>
        <Button shape="squircle" className={accentFilled.pink}>
          Pink
        </Button>
        <Button shape="squircle" className={accentFilled.red}>
          Red
        </Button>
        <Button shape="squircle" className={accentFilled.neutral}>
          Neutral
        </Button>
        <Button shape="squircle" variant="outline" className={accentOutline.yellow}>
          Yellow outline
        </Button>
        <Button shape="squircle" variant="outline" className={accentOutline.blue}>
          Blue outline
        </Button>
        <Button shape="squircle" variant="outline" className={accentOutline.ocean}>
          Ocean outline
        </Button>
        <Button shape="squircle" variant="outline" className={accentOutline.green}>
          Green outline
        </Button>
        <Button
          shape="squircle"
          size="icon"
          aria-label="Add"
          className={accentFilled.yellow}
        >
          <PlusIcon weight={iconWeight} />
        </Button>
        <Button shape="squircle" size="icon" aria-label="Search" className={accentFilled.blue}>
          <MagnifyingGlassIcon weight={iconWeight} />
        </Button>
      </div>
    </>
  )
}
