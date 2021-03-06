import { theme as defaultTheme } from "@chakra-ui/core"

const SIDE_NAV_WIDTH = "15rem"
const HEADER_HEIGHT = "4rem"

const theme = {
  ...defaultTheme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...defaultTheme.colors,
    primary: "#3f334d",
  },
  buttons: {
    variants: {
      primary: {
        maxWidth: "120px",
        color: "white",
        bg: "primary",
      },
    },
  },
  fontSizes: {
    ...defaultTheme.fontSizes,
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  sizes: {
    ...defaultTheme.sizes,
    sideNavWidth: SIDE_NAV_WIDTH,
    headerHeight: HEADER_HEIGHT,
  },
  space: {
    ...defaultTheme.space,
    sideNavWidth: SIDE_NAV_WIDTH,
    headerHeight: HEADER_HEIGHT,
  },
  icons: {
    ...defaultTheme.icons,
    logo: defaultTheme.icons["view"],
  },
}

export default theme
