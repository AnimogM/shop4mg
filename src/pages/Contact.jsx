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
          <Box>
            <Text mt={["0", "5"]} mb="10" fontSize={["sm", "md"]}>
              Have an inquiry or some feedback for us? fill out the form below
              and our team will get back to you!n
            </Text>
            <form>
              <Box mb="5">
                <FormLabel fontWeight="bold" htmlFor="name">
                  Name
                </FormLabel>
                <Input
                  name="name"
                  borderColor="blue.400"
                  type="text"
                  id="name"
                />
              </Box>
              <Box mb="5">
                <FormLabel fontWeight="bold" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  name="email"
                  borderColor="blue.400"
                  type="email"
                  id="email"
                />
              </Box>
              <Box mb="5">
                <FormLabel fontWeight="bold" htmlFor="message">
                  Message
                </FormLabel>
                <Textarea borderColor="blue.400" id="message" name="message" />
              </Box>
              <Button
                variant="solid"
                w="full"
                aria-label="message"
                colorScheme="blue"
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
