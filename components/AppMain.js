import { Flex, Heading } from "@chakra-ui/react";
import CardList from "./CardList";

const cards = [
  {
    caption: "سامانه گاما",
    iconName: "todo-list",
  },
  {
    caption: "سامانه ptime",
    iconName: "clock",
  },
  {
    caption: "سامانه گاما",
    iconName: "tool",
  },
  {
    caption: "سامانه گاما",
    iconName: "online-shopping",
  },
  {
    caption: "سامانه گاما",
    iconName: "money-check",
  },
  {
    caption: "سامانه گاما",
    iconName: "user",
  },
  {
    caption: "سامانه ptime",
    iconName: "user",
  },
  {
    caption: "سامانه گاما",
    iconName: "user",
  },
  {
    caption: "سامانfsf s fsه گاما",
    iconName: "user",
  },
  {
    caption: "سامانه گاما",
    iconName: "user",
  },
  {
    caption: "سامانه گاما",
    iconName: "user",
  },
  {
    caption: "سامانه گاما",
    iconName: "user",
    display: "hidden",
  },
];

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
      <CardList cards={cards} />
    </Flex>
  );
}

export default AppMain;
