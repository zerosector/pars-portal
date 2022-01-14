import { ChakraProvider, CSSReset, LightMode } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Fonts from "../components/Fonts";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
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
