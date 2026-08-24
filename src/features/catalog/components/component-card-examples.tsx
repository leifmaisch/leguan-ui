"use client"

import { CodeSnippet } from "@/components/shared/code-snippet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cardExamples } from "@/features/catalog/constants/card-examples"
import { CatalogDocSection } from "@/features/catalog/components/layout/catalog-doc-section"

export function ComponentCardExamples() {
  return (
    <CatalogDocSection title="Code">
      <Tabs defaultValue={cardExamples[0].id} className="min-w-0 w-full">
        <div className="max-w-full overflow-x-auto pb-1">
          <TabsList className="inline-flex w-max">
            {cardExamples.map((example) => (
              <TabsTrigger key={example.id} value={example.id} className="flex-none">
                {example.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

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
    </CatalogDocSection>
  )
}
