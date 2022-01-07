import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  LightMode,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    direction: "rtl",
    fonts: {
      heading: "YekanBakh",
      body: "YekanBakh",
    },
    initialColorMode: "light",
    useSystemColorMode: false,
  });

  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <Fonts />
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LightMode>
    </ChakraProvider>
  );
}

export default MyApp;
