"use client"

import { Palette } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

import { iconWeight } from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  defaultPrimaryColor,
  isPrimaryColorId,
  PRIMARY_COLOR_EVENT,
  PRIMARY_COLOR_STORAGE_KEY,
  primaryColorOptions,
  type PrimaryColorId,
} from "@/lib/theme-colors"
import { cn } from "@/lib/utils"

function applyPrimaryColor(color: PrimaryColorId) {
  document.documentElement.dataset.primary = color
  localStorage.setItem(PRIMARY_COLOR_STORAGE_KEY, color)
  window.dispatchEvent(new Event(PRIMARY_COLOR_EVENT))
}

export function PrimaryColorSelect() {
  const [activeColor, setActiveColor] = useState<PrimaryColorId>(defaultPrimaryColor)

  useEffect(() => {
    const stored = localStorage.getItem(PRIMARY_COLOR_STORAGE_KEY)
    const color = stored && isPrimaryColorId(stored) ? stored : defaultPrimaryColor
    applyPrimaryColor(color)
    setActiveColor(color)
  }, [])

  function handleSelect(color: PrimaryColorId) {
    applyPrimaryColor(color)
    setActiveColor(color)
  }

  const activeSwatch =
    primaryColorOptions.find((option) => option.id === activeColor)?.swatch ??
    primaryColorOptions[0].swatch

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Select primary color"
          />
        }
      >
        <span
          className="size-3.5 rounded-full border border-border"
          style={{ backgroundColor: activeSwatch }}
        />
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <PopoverHeader>
          <PopoverTitle className="flex items-center gap-2">
            <Palette weight={iconWeight} className="size-4" />
            Primary color
          </PopoverTitle>
        </PopoverHeader>
        <div className="grid grid-cols-3 gap-2">
          {primaryColorOptions.map((option) => {
            const isActive = option.id === activeColor

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-squircle-sm border px-2 py-2 text-[11px] font-medium transition-colors",
                  isActive
                    ? "border-primary/30 bg-primary/10 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:bg-muted"
                )}
              >
                <span
                  className="size-5 rounded-full border border-border"
                  style={{ backgroundColor: option.swatch }}
                />
                {option.label}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
