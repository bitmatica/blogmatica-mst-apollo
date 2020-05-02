import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    primary: "purple",
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
    ...theme.fontSizes,
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
};
