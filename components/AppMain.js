import { Flex, Heading } from "@chakra-ui/react";
import CardList from "./CardList";
import config from "../utils/config";

function AppMain() {
  return (
    <Flex
      direction={"column"}
      padding={{ base: "1rem", md: "1rem 2rem", xl: "1rem 10%" }}
      alignItems={"center"}
    >
      <Heading fontSize={"xl"} alignSelf={"stretch"} padding={"1rem 0 0.5rem"}>
        {"خدمات شرکت"}
      </Heading>
      <CardList cards={config.cards} />
    </Flex>
  );
}

export default AppMain;
