type ComponentPageHeaderProps = {
  title: string
  description: string
}

export function ComponentPageHeader({
  title,
  description,
}: ComponentPageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="font-runde text-3xl font-bold tracking-tight">{title}</h1>
      <p className="max-w-2xl text-muted-foreground">{description}</p>
    </div>
  )
}
