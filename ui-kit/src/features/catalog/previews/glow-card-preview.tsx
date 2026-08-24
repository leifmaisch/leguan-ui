import {
  GlowCard,
  GlowCardAction,
  GlowCardDescription,
  GlowCardLabel,
  GlowCardTitle,
} from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"

export function GlowCardPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <GlowCard variant="default">
        <GlowCardLabel>Default</GlowCardLabel>
        <GlowCardTitle>Standard surface</GlowCardTitle>
        <GlowCardDescription>
          For standard featured content.
        </GlowCardDescription>
      </GlowCard>
      <GlowCard variant="primary">
        <GlowCardLabel>Primary</GlowCardLabel>
        <GlowCardTitle>Accent surface</GlowCardTitle>
        <GlowCardDescription>
          Draw attention to key actions.
        </GlowCardDescription>
        <GlowCardAction>
          <Button size="sm">Get started</Button>
        </GlowCardAction>
      </GlowCard>
      <GlowCard variant="muted">
        <GlowCardLabel>Muted</GlowCardLabel>
        <GlowCardTitle>Secondary surface</GlowCardTitle>
        <GlowCardDescription>
          Supporting content blocks.
        </GlowCardDescription>
      </GlowCard>
    </div>
  )
}
