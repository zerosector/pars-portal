import { Flex, Image, Text } from "@chakra-ui/react";
import TitleIconLink from "./TitleIconLink";

function Header() {
  return (
    <header style={{ zIndex: "100" }}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"0.5rem 1rem"}
        bg={"white"}
        boxShadow={"0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)"}
      >
        <Image
          src="/img/logo.png"
          maxH={"50px"}
          alt="logo"
          display={{ base: "none", sm: "none", md: "block" }}
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
