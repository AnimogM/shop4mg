import Layout from "../layout";
import { useState, useEffect } from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import Product from "../components/Product";
import mockProducts from "../data/mockProducts";

const Store = () => {
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <Box bg="gray.50">
        <Box px={["5", "16"]} py="14" bg="">
          <Heading fontStyle="italic" fontWeight={300} textAlign="center">
            All Products
          </Heading>
          <SimpleGrid
            mt="8"
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
          >
            {products.map((items) => (
              <Product key={items.id} {...items} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Store;
