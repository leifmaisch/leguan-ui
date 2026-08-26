import {
  BentoCell,
  BentoCellContent,
  BentoCellDescription,
  BentoCellPanel,
  BentoCellTitle,
  BentoGrid,
} from "@/components/ui/bento-grid"

export function LandingZenithBento() {
  return (
    <BentoGrid
      title="A reading experience, not a feed"
      description="Quill bento tiles highlight what members get beyond the headline."
    >
      <BentoCell span="large">
        <BentoCellPanel>
          <BentoCellContent className="py-6 sm:py-8">
            <BentoCellTitle>Long-form essays</BentoCellTitle>
            <BentoCellDescription>
              Comfortable line length, generous margins, and typography tuned for
              twenty-minute reads on any screen.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Audio</BentoCellTitle>
            <BentoCellDescription>Listen while you commute.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell>
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Comments</BentoCellTitle>
            <BentoCellDescription>Threaded, moderated discussions.</BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
      <BentoCell span="wide">
        <BentoCellPanel>
          <BentoCellContent className="py-5 sm:py-6">
            <BentoCellTitle>Member library</BentoCellTitle>
            <BentoCellDescription>
              Save essays offline and sync reading progress across devices.
            </BentoCellDescription>
          </BentoCellContent>
        </BentoCellPanel>
      </BentoCell>
    </BentoGrid>
  )
}
