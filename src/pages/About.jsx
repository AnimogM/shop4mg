import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

import Layout from "../layout";
import BG from "../assets/contact.png"

const About = () => {
  return (
    <Layout>
      <Box px={["5", "16"]} py="10">
        <Stack direction={["column", "row"]} align="center" spacing="5">
          <Box w={["full", "50%"]}>
            <Heading letterSpacing="wider">About Us</Heading>
            <Text mt="10" lineHeight="7" fontSize={["sm", "md"]}>
              shop4mg is a trusted and reliable online platform that allows you
              to report cases of missing or kidnapped persons in and within your
              locality and across Nigeria. We create awareness through our
              information channels, collaborate with relevat security agencies
              and the general public towards a safer Nigeria.
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
            w="400px"
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
