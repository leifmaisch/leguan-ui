type ComponentAttributionProps = {
  name: string
  href: string
}

export function ComponentAttribution({ name, href }: ComponentAttributionProps) {
  return (
    <p className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
      Built with{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80"
      >
        {name}
      </a>
      . Chart components are provided by this third-party library.
    </p>
  )
}
