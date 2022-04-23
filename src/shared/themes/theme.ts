import { createTheme, useTheme } from "@shopify/restyle";

const palette = {
  red: "#D81F26",
  black: "black",
  grey: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    accent: palette.red,
    text: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
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
      fontSize: 22,
      fontWeight: "bold",
      color: "text",
    },
  },
});

export type Theme = typeof theme;
export const useCustomTheme = () => useTheme<Theme>();

export default theme;
