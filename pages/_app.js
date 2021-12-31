import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({ irection: "rtl" });

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
