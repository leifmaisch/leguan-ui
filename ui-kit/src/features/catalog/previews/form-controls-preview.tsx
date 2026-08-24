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
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Switch id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="marketing" />
          <Label htmlFor="marketing">Marketing emails</Label>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" defaultChecked />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
      </div>
      <div className="sm:col-span-2">
        <Label className="mb-2 block">Framework</Label>
        <Select defaultValue="next">
          <SelectTrigger className="w-full max-w-xs">
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
