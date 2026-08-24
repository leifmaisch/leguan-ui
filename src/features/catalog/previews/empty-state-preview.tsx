import { FolderOpenIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { EmptyState } from "@/components/ui/empty-state"
import { Button } from "@/components/ui/button"

export function EmptyStatePreview() {
  return (
    <EmptyState
      icon={<FolderOpenIcon weight={iconWeight} className="size-5" />}
      title="No projects yet"
      description="Get started by creating your first project. You can always import from a template later."
      action={<Button size="sm">Create project</Button>}
    />
  )
}
