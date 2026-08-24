import { MagnifyingGlass } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function InputsPreview() {
  return (
    <div className="grid max-w-lg gap-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <div className="relative">
          <MagnifyingGlass
            weight={iconWeight}
            className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input id="search" className="pl-8" placeholder="Search components..." />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Write your message here..."
          rows={3}
        />
      </div>
    </div>
  )
}
