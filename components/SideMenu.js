import React from "react";
import { Box, StackDivider, VStack } from "@chakra-ui/react";
import SideMenuItem from "./SideMenuItem";

function SideMenu() {
  return (
    <VStack divider={<StackDivider borderColor="gray.100" />} align="stretch">
      <Box>
        <SideMenuItem caption={"پیشخوان"} iconName={"home"} />
      </Box>
      <Box>
        <SideMenuItem caption={"خدمات"} iconName={"waiter"} />
      </Box>
    </VStack>
  );
}

export default SideMenu;
