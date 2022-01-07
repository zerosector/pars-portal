import { Box, Flex } from "@chakra-ui/react";
import Card from "./Card";

function CardList({ cards }) {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
      {cards.map((card, index) => (
        <Box
          key={index}
          border={"1rem"}
          flexBasis={{
            base: "50%",
            sm: "33.33333%",
            md: "25%",
            lg: "16.66667%",
          }}
        >
          <Card card={card} />
        </Box>
      ))}
    </Flex>
  );
}

export default CardList;
