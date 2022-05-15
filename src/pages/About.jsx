import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

import Layout from "../layout";
import BG from "../assets/contact.png";

const About = () => {
  return (
    <Layout>
      <Box px={["5", "16"]} py="10">
        <Stack direction={["column", "row"]} align="center" spacing="5">
          <Box w={["full", "50%"]}>
            <Heading letterSpacing="wider">About Us</Heading>
            <Text mt="10" lineHeight="7" fontSize={["sm", "md"]}>
              shop4mg is a trusted and reliable online platform that helps
              people save money and live better. shop4mg International delivers
              on this promise by bringing value and convenience to millions of
              customers in 23 countries outside the Nigeria. Our unique global
              perspective makes it possible to see connections that others
              cannot and to bring innovations to market that make life easier
              for customers.
            </Text>
          </Box>
          <Box>
            <Image src={BG} objectFit="contain" />
          </Box>
        </Stack>

        <Box my="5" textAlign="center">
          <Heading>our Mission</Heading>
          <Text
            border="2px solid"
            mx="auto"
            p="5"
            maxW="400px"
            borderColor="red.200"
            mt="3"
            rounded="2xl"
            fontSize={["sm", "md"]}
          >
            At shop4mg our mission is to assist you shop easily from the comfort
            of your home at affordable price.
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
