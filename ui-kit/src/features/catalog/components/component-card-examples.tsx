"use client"

import { CodeSnippet } from "@/components/shared/code-snippet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cardExamples } from "@/features/catalog/constants/card-examples"

export function ComponentCardExamples() {
  return (
    <section className="space-y-4">
      <h2 className="font-runde text-lg font-semibold tracking-tight">Code</h2>

      <Tabs defaultValue={cardExamples[0].id}>
        <TabsList>
          {cardExamples.map((example) => (
            <TabsTrigger key={example.id} value={example.id} className="flex-none">
              {example.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {cardExamples.map((example) => (
          <TabsContent key={example.id} value={example.id} className="mt-4">
            <CodeSnippet
              code={example.code}
              language="tsx"
              filename={example.filename}
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
