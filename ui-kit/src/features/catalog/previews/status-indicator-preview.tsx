import { StatusIndicator } from "@/components/leguan/status-indicator"

export function StatusIndicatorPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <StatusIndicator status="online" pulse />
      <StatusIndicator status="away" />
      <StatusIndicator status="busy" />
      <StatusIndicator status="offline" />
    </div>
  )
}
