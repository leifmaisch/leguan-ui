"use client"

import { CaretDown, Gear, SignOut, User } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          Open Menu
          <CaretDown weight={iconWeight} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User weight={iconWeight} />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Gear weight={iconWeight} />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <SignOut weight={iconWeight} />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
