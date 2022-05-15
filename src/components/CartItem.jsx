import { Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const CartItem = ({ title, price, amount, image, id }) => {
  const { dispatch } = useGlobalContext();
  return (
    <Grid templateColumns="repeat(5, 1fr)" align="center" gap="5">
      <GridItem colSpan={1}>
        <Image src={image} alt={title} maxW="70px" h="70px" objectFit="cover" />
      </GridItem>
      <GridItem colSpan={3}>
        <VStack spacing="0" align="start">
          <Text fontSize={12} textAlign="start">
            {title}
          </Text>
          <Text fontStyle="italic">${price}</Text>
          <Text
            fontWeight="light"
            fontSize="14"
            color="gray.400"
            variant="ghost"
            cursor="pointer"
            _hover={{ color: "red.300" }}
            onClick={() => dispatch({ type: "REMOVE", payload: id })}
          >
            remove
          </Text>
        </VStack>
      </GridItem>
      <GridItem colSpan={1}>
        <VStack spacing="1" alignSelf="end" textAlign="end">
          <FaChevronUp
            cursor="pointer"
            onClick={() => dispatch({ type: "INCREASE" })}
          />
          <Text>{amount}</Text>
          <FaChevronDown
            cursor="pointer"
            onClick={() => dispatch({ type: "DECREASE" })}
          />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default CartItem;
