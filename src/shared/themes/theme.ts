import { createTheme, useTheme } from "@shopify/restyle";

const palette = {
  red: "#D81F26",
  black: "black",
  white: "#F0F2F3",
  greyWhite: "#D0D0D0",
  greyTransparent: "rgba(95, 88, 83, 0.45)",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    accent: palette.red,
    text: palette.white,
    textDescription: palette.greyWhite,
    chipsBackground: palette.greyTransparent,
  },
  spacing: {
    s: 6,
    m: 12,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title: {
      color: "text",
      fontSize: 30,
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 10,
      textShadowColor: "mainBackground",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "text",
    },
    defaults: {
      fontSize: 14,
      color: "text",
    },
    description: {
      fontSize: 16,
      color: "textDescription",
    },
  },
});

export type Theme = typeof theme;
export const useCustomTheme = () => useTheme<Theme>();

export default theme;
