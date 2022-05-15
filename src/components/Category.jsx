import { Image, Text, VStack } from "@chakra-ui/react";

const Category = ({ title, img }) => {
  return (
    <VStack spacing={10} shadow="lg" py="10" bg="white">
      <Image src={img} alt={title} boxSize="150" objectFit="contain" />
      <Text>{title}</Text>
    </VStack>
  );
};

export default Category;
