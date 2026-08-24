import { AlertCircle, Info } from "lucide-react"

import { ShowcaseSection } from "@/components/shared"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertsShowcase() {
  return (
    <ShowcaseSection
      id="alerts"
      title="Alerts"
      description="Display important messages and feedback."
    >
      <div className="grid max-w-lg gap-4">
        <Alert>
          <Info />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please sign in again.
          </AlertDescription>
        </Alert>
      </div>
    </ShowcaseSection>
  )
}
