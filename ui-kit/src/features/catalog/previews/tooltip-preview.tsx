"use client"

import {
  Info,
  MagnifyingGlass,
  Plus,
  Question,
} from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipPreview() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            Hover me
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button shape="squircle" variant="secondary" />}>
            Squircle
          </TooltipTrigger>
          <TooltipContent>Works on squircle buttons</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={<Button shape="squircle" size="icon" aria-label="Search" />}
          >
            <MagnifyingGlass weight={iconWeight} />
          </TooltipTrigger>
          <TooltipContent>Search</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                shape="squircle"
                size="icon"
                variant="ghost"
                aria-label="Help"
              />
            }
          >
            <Question weight={iconWeight} />
          </TooltipTrigger>
          <TooltipContent side="right">
            Keyboard shortcuts are available in settings.
          </TooltipContent>
        </Tooltip>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-6">
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            Top
          </TooltipTrigger>
          <TooltipContent side="top">Top placement</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            Right
          </TooltipTrigger>
          <TooltipContent side="right">Right placement</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            Bottom
          </TooltipTrigger>
          <TooltipContent side="bottom">Bottom placement</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            Left
          </TooltipTrigger>
          <TooltipContent side="left">Left placement</TooltipContent>
        </Tooltip>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-3">
        <Tooltip>
          <TooltipTrigger
            render={<Button size="icon-sm" variant="ghost" aria-label="Info" />}
          >
            <Info weight={iconWeight} />
          </TooltipTrigger>
          <TooltipContent>
            Leguan tooltips use squircle corners, popover surfaces, and depth.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button size="sm" variant="outline" />}>
            <Plus weight={iconWeight} />
            New item
          </TooltipTrigger>
          <TooltipContent>Create a new catalog entry</TooltipContent>
        </Tooltip>
      </div>
    </>
  )
}
