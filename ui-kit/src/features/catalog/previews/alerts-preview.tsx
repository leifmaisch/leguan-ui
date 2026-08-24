import { Info, WarningCircle } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertsPreview() {
  return (
    <div className="grid max-w-lg gap-4">
      <Alert>
        <Info weight={iconWeight} />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <WarningCircle weight={iconWeight} />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please sign in again.
        </AlertDescription>
      </Alert>
    </div>
  )
}
