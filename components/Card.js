import { Box, Square } from "@chakra-ui/react";
import { useRef } from "react";

function Card({ card: { caption, iconName } }) {
  const lordE = useRef(null);
  const handleMouseEvent = () => {
    const mouseEnterEvent = new Event("mouseenter");
    lordE.current.dispatchEvent(mouseEnterEvent);
  };
  return (
    <div onMouseEnter={handleMouseEvent}>
      <Square
        border={"1px solid rgba(6,30,45,.29)"}
        borderRadius={"12px"}
        boxShadow={"0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)"}
        bg={"white"}
        _hover={{
          border: "1px solid rgb(3, 193, 207)",
          boxShadow: "0 1px 10px 0 rgba(3,193,207,.52)",
          color: "gray.900",
        }}
        margin={"0.5rem"}
        flexDirection={"column"}
        color={"gray.500"}
        padding={"1rem"}
      >
        <Box marginBottom={"1rem"}>
          <lord-icon
            src={`/icons/${iconName}.json`}
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "70px", height: "70px" }}
            ref={lordE}
          />
        </Box>
        <p>{caption}</p>
      </Square>
    </div>
  );
}

export default Card;
