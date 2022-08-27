import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  FormControl,
} from "@chakra-ui/react";
import Layout from "../layout";
import BG from "../assets/contact.png";

const Contact = () => {
  return (
    <Layout>
      <Box px={["5", "16"]} py="10">
        <Heading letterSpacing="wider">Contact Us</Heading>
        <Stack
          direction={["column", "row"]}
          align="center"
          spacing={["4", "10"]}
        >
          <Box display={{ base: "none", lg: "block" }} w={["full", "50%"]}>
            <Image src={BG} objectFit="contain" />
          </Box>
          <Box py="5">
            <Text mt={["0", "5"]} mb="10" fontSize={["sm", "md"]}>
              Have an inquiry or some feedback for us? fill out the form below
              and our team will get back to you!n
            </Text>
            <form>
              <FormControl mb="5">
                <FormLabel fontWeight="bold" htmlFor="name">
                  Name
                </FormLabel>
                <Input
                  name="name"
                  borderColor="blue.400"
                  type="text"
                  id="name"
                  h="12"
                />
              </FormControl>
              <FormControl mb="5">
                <FormLabel fontWeight="bold" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  name="email"
                  borderColor="blue.400"
                  type="email"
                  id="email"
                  h="12"
                />
              </FormControl>
              <FormControl mb="5">
                <FormLabel fontWeight="bold" htmlFor="message">
                  Message
                </FormLabel>
                <Textarea borderColor="blue.400" id="message" name="message" />
              </FormControl>
              <Button
                variant="solid"
                bgColor="blue.400"
                color="white"
                _hover={{bgColor: "red.500"}}
                w="full"
                aria-label="message"
                h="12"
                mt="5"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Contact;
