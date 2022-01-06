import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import TitleIconLink from "./TitleIconLink";

function Header() {
  const displayIcon = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "block",
  });
  return (
    <header>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap={displayIcon === "none" ? "nowrap" : "wrap"}
      >
        <Image
          src="/img/logo.png"
          maxH={"50px"}
          alt="logo"
          display={displayIcon}
        />
        <Flex direction={"column"}>
          <Text textAlign={"center"}>درگاه یکپارچه خدمات الکترونیک</Text>
          <Text textAlign={"center"}>شرکت پارس تکنولوژی سداد</Text>
        </Flex>
        <TitleIconLink
          caption={"ورود"}
          href={"https://www.google.com"}
          iconName={"user"}
        />
      </Flex>
    </header>
  );
}

export default Header;
