import { Flex, Heading } from "@chakra-ui/react";
import CardList from "./CardList";

const cards = [
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
    <Flex direction={"column"} padding={"1rem"} alignItems={"center"}>
      <Heading>{"خدمات شرکت"}</Heading>
      <CardList cards={cards} />
    </Flex>
  );
}

export default AppMain;
