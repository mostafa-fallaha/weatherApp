import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#e0f7ff",
      100: "#b5e5fd",
      200: "#88d3fa",
      300: "#5bc1f6",
      400: "#39aff4",
      500: "#2a96da",
      600: "#1d75aa",
      700: "#11547a",
      800: "#02324a",
      900: "#00121c",
    },
  },
});

export default theme;
