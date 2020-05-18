import theme from "./theme"

export type CustomTheme = typeof theme

declare module "@chakra-ui/core" {
  export function useTheme(): CustomTheme
}

export type ButtonVariants = keyof typeof theme.buttons.variants
