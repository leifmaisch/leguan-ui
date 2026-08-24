"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function FormControlsPreview() {
  return (
    <div className="grid w-full min-w-0 gap-8 sm:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <div className="flex items-start gap-3 sm:items-center">
          <Switch id="notifications" defaultChecked className="shrink-0" />
          <Label htmlFor="notifications" className="min-w-0 leading-snug">
            Enable notifications
          </Label>
        </div>
        <div className="flex items-start gap-3 sm:items-center">
          <Switch id="marketing" className="shrink-0" />
          <Label htmlFor="marketing" className="min-w-0 leading-snug">
            Marketing emails
          </Label>
        </div>
      </div>
      <div className="min-w-0 space-y-4">
        <div className="flex items-start gap-3 sm:items-center">
          <Checkbox id="terms" defaultChecked className="shrink-0" />
          <Label htmlFor="terms" className="min-w-0 leading-snug">
            Accept terms and conditions
          </Label>
        </div>
        <div className="flex items-start gap-3 sm:items-center">
          <Checkbox id="newsletter" className="shrink-0" />
          <Label htmlFor="newsletter" className="min-w-0 leading-snug">
            Subscribe to newsletter
          </Label>
        </div>
      </div>
      <div className="min-w-0 sm:col-span-2">
        <Label className="mb-2 block">Framework</Label>
        <Select defaultValue="next">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
