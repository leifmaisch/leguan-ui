import { StatCard } from "@/components/leguan/stat-card"

export function StatCardPreview() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
      <StatCard label="Revenue" value="$48.2k" change="+12.5%" positive />
      <StatCard label="Active users" value="2,847" change="+4.2%" positive />
      <StatCard label="Churn rate" value="2.1%" change="+0.3%" positive={false} />
      <StatCard label="Avg. session" value="4m 32s" change="+18s" positive />
    </div>
  )
}
