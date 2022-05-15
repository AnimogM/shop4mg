import { Button, Image, Text, VStack } from "@chakra-ui/react";
import { useGlobalContext } from "../context/context";

const Product = ({ title, image, price, id }) => {
  const { addItem } = useGlobalContext();
  return (
    <VStack
      spacing={5}
      shadow="lg"
      py="10"
      bg="white"
      px="5"
      cursor="pointer"
      transitionDuration="5"
      transition="ease"
      _hover={{ scale: "200" }}
    >
      <Image src={image} alt={title} boxSize="150" objectFit="contain" />
      <Text textAlign="center">{title}</Text>
      <Text color="red.600">${price}</Text>
      <Button
        justifySelf="end"
        colorScheme="blue"
        onClick={() => addItem(id, title, image, price)}
      >
        Add to Cart
      </Button>
    </VStack>
  );
};

export default Product;
