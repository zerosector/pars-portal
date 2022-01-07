import React, { useRef } from "react";
import { Box, Square, Text } from "@chakra-ui/react";

function SideMenuItem({ caption, iconName }) {
  const lordE = useRef(null);
  const handleMouseEvent = () => {
    const mouseEnterEvent = new Event("mouseenter");
    lordE.current.dispatchEvent(mouseEnterEvent);
  };
  return (
    <a onMouseEnter={handleMouseEvent} href={"/"}>
      <Square
        bg={"white"}
        _hover={{
          color: "gray.900",
        }}
        flexDirection={"column"}
        color={"gray.500"}
        margin={"1rem 0"}
      >
        <Box>
          <lord-icon
            src={`/icons/${iconName}.json`}
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "50px", height: "50px" }}
            ref={lordE}
          />
        </Box>
        <Text fontSize={"md"}>{caption}</Text>
      </Square>
    </a>
  );
}

export default SideMenuItem;
