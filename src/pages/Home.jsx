import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import Layout from "../layout";
import HeroBg from "../assets/cool-background 2.png";
import Category from "../components/Category";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "jewelery",
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    title: "men's clothing",
    img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    title: "women's clothing",
    img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
  {
    title: "electronics",
    img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
];

const Home = () => {
  return (
    <Layout>
      <Box>
        <Stack
          px={["5", "16"]}
          minH="90vh"
          justify="center"
          backgroundImage={`url("${HeroBg}")`}
          spacing="7"
        >
          <Heading fontSize={{ base: "2rem", lg: "4rem" }} w={["full", "70%"]}>
            Jeweleries, Clothing and Electronics
          </Heading>
          <Text>Embrace your choices - we do</Text>
          <Link to="/store">
            <Button
              variant="solid"
              w="200px"
              aria-label="shop now"
              colorScheme="red"
              size="lg"
              mt="10"
            >
              SHOP NOW
            </Button>
          </Link>
        </Stack>
        <Box px="16" py="14" bg="">
          <Heading fontStyle="italic" fontWeight={300} textAlign="center">
            Categories
          </Heading>
          <SimpleGrid
            mt="8"
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
          >
            {categories.map((items) => (
              <Category key={items.title} {...items} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
