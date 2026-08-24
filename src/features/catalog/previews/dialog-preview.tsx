"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" shape="squircle" />}>
        Open Dialog
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Alex Rivera" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="alex@leguan.dev" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" shape="squircle" />}>
            Cancel
          </DialogClose>
          <Button shape="squircle">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
