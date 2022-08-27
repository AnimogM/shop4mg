import { Box, Stack, Text, HStack, Flex } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="blue.50" px="16" py="10">
      <Stack>
        <Flex align="center" gap="3" justify="center">
          <Text fontSize="20" fontWeight="bold" color="blue.500" display="flex">
            shop<Text color="red.500">4mg</Text>
          </Text>
          <Text py="3" fontSize="14">
            &copy; 2021
          </Text>
        </Flex>
      </Stack>
      <HStack spacing="5" align="center" justify="center" color="black">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      </HStack>
    </Box>
  );
};

export default Footer;
