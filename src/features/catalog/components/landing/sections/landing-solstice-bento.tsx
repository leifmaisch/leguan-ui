import {
  BentoCell,
  BentoCellContent,
  BentoCellDescription,
  BentoCellPanel,
  BentoCellTitle,
  BentoGrid,
} from "@/components/ui/bento-grid"

export function LandingSolsticeBento() {
  return (
    <BentoGrid
      title="API surface at a glance"
      description="Every endpoint your integration needs, grouped in one view."
    >
      <BentoCell span="large">
        <BentoCellPanel>
          <BentoCellContent className="py-6 sm:py-8">
            <BentoCellTitle>Payments API</BentoCellTitle>
            <BentoCellDescription>
              Create charges, refunds, and subscriptions with idempotent POST
              requests and typed error codes.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Webhooks</BentoCellTitle>
            <BentoCellDescription>Signed events with replay.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Connect</BentoCellTitle>
            <BentoCellDescription>Marketplace payouts and splits.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide">
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Radar rules</BentoCellTitle>
            <BentoCellDescription>
              Block fraud before it hits your ledger with configurable risk scores.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
    </BentoGrid>
  )
}
