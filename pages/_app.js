import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    direction: "rtl",
    fonts: {
      heading: "YekanBakh",
      body: "YekanBakh",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
