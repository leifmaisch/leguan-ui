import { SparkleIcon } from "@phosphor-icons/react"

import { iconWeight } from "@/components/shared"
import {
  Footer,
  FooterBar,
  FooterBrand,
  FooterColumn,
  FooterColumns,
  FooterCopyright,
  FooterDivider,
  FooterLegal,
  FooterLink,
  FooterMain,
  FooterPanel,
} from "@/components/ui/footer"

export function FooterPreview() {
  return (
    <Footer>
      <FooterPanel>
        <FooterMain>
          <FooterBrand
            name="Leguan"
            logo={
              <SparkleIcon
                weight={iconWeight}
                className="size-7 text-primary"
              />
            }
          >
            Composable sections and primitives for polished marketing pages.
          </FooterBrand>
          <FooterColumns>
            <FooterColumn title="Product">
              <FooterLink label="Components" href="#" />
              <FooterLink label="Charts" href="#" />
              <FooterLink label="Get started" href="#" />
            </FooterColumn>
            <FooterColumn title="Resources">
              <FooterLink label="Documentation" href="#" />
              <FooterLink label="Agents guide" href="#" />
              <FooterLink label="Inspiration" href="#" />
            </FooterColumn>
            <FooterColumn title="Company">
              <FooterLink label="About" href="#" />
              <FooterLink label="Blog" href="#" />
              <FooterLink label="Contact" href="#" />
            </FooterColumn>
          </FooterColumns>
        </FooterMain>
        <FooterDivider />
        <FooterBar>
          <FooterCopyright name="Leguan" />
          <FooterLegal
            links={[
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ]}
          />
        </FooterBar>
      </FooterPanel>
    </Footer>
  )
}
