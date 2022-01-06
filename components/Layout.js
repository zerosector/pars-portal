import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "./Header";
import Script from "next/script";

function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/js/lord-icon-2.1.0.js" />
      <Flex
        direction="column"
        align="center"
        alignItems={"stretch"}
        maxW={{ xl: "80%" }}
        m="0 auto"
        {...props}
      >
        <Header />
        {props.children}
      </Flex>
    </>
  );
}

export default Layout;