import type { Icon, IconProps } from "@phosphor-icons/react"

export type { Icon as PhosphorIcon, IconProps as PhosphorIconProps }

export const iconWeight = "bold" as const

export function withIconWeight(props?: IconProps): IconProps {
  return { weight: iconWeight, ...props }
}
