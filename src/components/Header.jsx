import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ d }) => {
  return (
    <Box
      pos="relative"
      display={d}
      cursor="pointer"
    >
      <FaShoppingCart size={20} />
      <Text
        color="red.300"
        bg="blue.600"
        rounded="full"
        px="5px"
        zIndex="10"
        pos="absolute"
        bottom="3"
        left="3"
      >
        0
      </Text>
    </Box>
  );
};

const Header = () => {
  return (
    <Box px={["5", "16"]} py="4">
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

          <Cart d={ ["block", "none"]}/>
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
        <Cart d={["none", "block"]} />
      </Stack>
    </Box>
  );
};

export default Header;
