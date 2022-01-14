import { extendTheme } from "@chakra-ui/react";

const config = {
  direction: "rtl",
  fonts: {
    heading: "YekanBakh",
    body: "YekanBakh",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
