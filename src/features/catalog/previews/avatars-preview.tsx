import {
  Avatar,
  AvatarDottext,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export function AvatarsPreview() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <Avatar shape="squircle" size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+4</AvatarGroupCount>
        </AvatarGroup>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-6">
        <Avatar>
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <Avatar shape="squircle">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-wrap items-center gap-6">
        <Avatar>
          <AvatarDottext>AL</AvatarDottext>
        </Avatar>
        <Avatar size="sm">
          <AvatarDottext>MK</AvatarDottext>
        </Avatar>
        <Avatar size="lg">
          <AvatarDottext>JB</AvatarDottext>
        </Avatar>
        <Avatar shape="squircle" size="lg">
          <AvatarDottext>CN</AvatarDottext>
        </Avatar>
        <AvatarGroup>
          <Avatar>
            <AvatarDottext>A</AvatarDottext>
          </Avatar>
          <Avatar>
            <AvatarDottext>B</AvatarDottext>
          </Avatar>
          <Avatar>
            <AvatarDottext>C</AvatarDottext>
          </Avatar>
          <AvatarGroupCount>+4</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </>
  )
}
