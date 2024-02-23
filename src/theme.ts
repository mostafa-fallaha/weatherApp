import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#e2f5ff",
      100: "#c4dded",
      200: "#a3c5da",
      300: "#81aeca",
      400: "#6096b9",
      500: "#467d9f",
      600: "#34617d",
      700: "#23455b",
      800: "#467d9f",
      900: "#00101a",
    },
  },
  breakpoints: {
    base: "0px",
    sm: "330px",
    sm2: "400px",
    md: "760px",
    md2: "1000px",
    lg: "1400px",
    xl: "1600px",
    "2xl": "1800px",
  },
});

export default theme;
