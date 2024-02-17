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
});

export default theme;
