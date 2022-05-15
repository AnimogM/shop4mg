import { Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const CartItem = ({ title, price, amount, image, id }) => {
  const { removeItem, decreaseItem, increaseItem } = useGlobalContext();
  return (
    <Grid templateColumns="repeat(5, 1fr)" align="center" gap="5">
      <GridItem colSpan={1}>
        <Image src={image} alt={title} maxW="70px" h="70px" objectFit="cover" />
      </GridItem>
      <GridItem colSpan={3}>
        <VStack spacing="0" align="start">
          <Text fontSize=".9rem" fontWeight="600" textAlign="start">
            {title}
          </Text>
          <Text fontSize=".9rem" fontStyle="italic">
            ${price}
          </Text>
          <Text
            fontWeight="light"
            fontSize="14"
            color="gray.400"
            variant="ghost"
            cursor="pointer"
            _hover={{ color: "red.300" }}
            onClick={() => removeItem(id)}
          >
            remove
          </Text>
        </VStack>
      </GridItem>
      <GridItem colSpan={1}>
        <VStack spacing="1" alignSelf="end" textAlign="end">
          <FaChevronUp cursor="pointer" onClick={() => increaseItem(id)} />
          <Text>{amount}</Text>
          <FaChevronDown cursor="pointer" onClick={() => decreaseItem(id)} />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default CartItem;
