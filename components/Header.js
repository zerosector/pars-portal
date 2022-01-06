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
        p={"0.5rem 1rem"}
        bg={"white"}
        boxShadow={"0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)"}
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
