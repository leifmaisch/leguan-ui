"use client"

import { CodeSnippet } from "@/components/shared/code-snippet"
import { cardExamples } from "@/features/catalog/constants/card-examples"

export function ComponentCardExamples() {
  return (
    <section className="space-y-8">
      <div className="space-y-1">
        <h2 className="font-runde text-lg font-semibold tracking-tight">Examples</h2>
        <p className="text-sm text-muted-foreground">
          Copy-ready patterns from the preview above.
        </p>
      </div>

      {cardExamples.map((example) => (
        <div key={example.id} className="space-y-3">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-foreground">{example.label}</h3>
            <p className="text-sm text-muted-foreground">{example.description}</p>
          </div>
          <CodeSnippet
            code={example.code}
            language="tsx"
            filename={example.filename}
          />
        </div>
      ))}
    </section>
  )
}
