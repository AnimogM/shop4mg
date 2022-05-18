import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../context/CartContext";


const Cart = ({ d, b }) => {
  const {onOpen, state} = useGlobalContext()
  return (
    <Box onClick={onOpen} pos="relative" display={d} cursor="pointer">
      <FaShoppingCart size={20} />
      <Text
        color="red.300"
        bg="blue.600"
        rounded="full"
        w="5"
        h="6"
        fontSize={14}
        display="grid"
        placeItems="center"
        zIndex="10"
        pos="absolute"
        bottom={b}
        left="3"
      >
        {state.totalAmount}
      </Text>
    </Box>
  );
};

const Header = () => {
  return (
    <Box px={["5", "16"]} py="4" pos="sticky" top="0" bg="white" shadow="md" zIndex={10}>
      <Stack
        direction={["column", "row"]}
        align={{ md: "center" }}
        justify="space-between"
      >
        <Flex justify={["space-between", "start"]}>
          <Link to="/">
            <Text
              fontSize={["20", "30"]}
              fontWeight="bold"
              color="blue.500"
              display="flex"
            >
              shop<Text color="red.500">4mg</Text>
            </Text>
          </Link>

          <Cart d={ ["block", "none"]} b="4"/>
        </Flex>
        <Flex align="center" alignSelf="center" justify="center" gap="5">
          <Link to="/">
            <Text _hover={{ color: "red.300" }}>Home</Text>
          </Link>
          <Link to="/store">
            <Text _hover={{ color: "red.300" }}>Store</Text>
          </Link>
          <Link to="/about">
            <Text _hover={{ color: "red.300" }}>About</Text>
          </Link>
          <Link to="/contact">
            <Text _hover={{ color: "red.300" }}>Contact</Text>
          </Link>
        </Flex>
        <Cart d={["none", "block"]} b="3"/>
      </Stack>
    </Box>
  );
};

export default Header;
