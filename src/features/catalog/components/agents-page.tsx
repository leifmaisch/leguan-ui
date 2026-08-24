"use client"

import { CheckIcon, CopyIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import { CodeSnippet } from "@/components/shared/code-snippet"
import { Button } from "@/components/ui/button"
import { CatalogPageContent } from "@/features/catalog/components/layout/catalog-page-content"
import { useCopyToClipboard } from "@/features/catalog/hooks/use-copy-to-clipboard"
import { getAgentsIntroPrompt } from "@/features/catalog/lib/agents-md"

type AgentsPageProps = {
  markdown: string
}

export function AgentsPage({ markdown }: AgentsPageProps) {
  const { copied, copy } = useCopyToClipboard()
  const prompt = getAgentsIntroPrompt()

  return (
    <CatalogPageContent>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-description">
          Machine-readable catalog for agents. Copy the prompt to introduce
          Leguan UI in your coding agent.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          shape="squircle"
          onClick={() => copy(prompt)}
          className="shrink-0"
        >
          {copied ? (
            <>
              <CheckIcon weight={iconWeight} />
              Copied
            </>
          ) : (
            <>
              <CopyIcon weight={iconWeight} />
              Copy agent prompt
            </>
          )}
        </Button>
      </div>
      <CodeSnippet
        code={markdown}
        language="markdown"
        filename="AGENTS.md"
      />
    </CatalogPageContent>
  )
}
