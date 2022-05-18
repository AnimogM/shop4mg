import {
  Box,
  VStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    onClose,
    isOpen,
    state: { cartItems, totalPrice },
    clearCart,
  } = useGlobalContext();
  return (
    <Drawer size={"sm"} isOpen={isOpen} onClose={onClose} placement={"right"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          fontSize="20"
          textAlign="center"
          py="4"
          fontStyle="italic"
        >
          Your Cart
        </DrawerHeader>
        <DrawerBody>
          {cartItems.length === 0 ? (
            <Box mt="10" textAlign="center">
              <Text>is currently empty</Text>
              <Button variant="outline" w="200px" onClick={onClose} colorScheme="blue" mt="10">
                <Link to="/store">continue shopping</Link>
              </Button>
            </Box>
          ) : (
            <VStack spacing="5">
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </VStack>
          )}
        </DrawerBody>
        <DrawerFooter flexDirection="column">
          <Box mb="5">
            <Text fontWeight="bold" color="blue.600">
              total: ${totalPrice}
            </Text>
          </Box>
          <Button colorScheme="red" w="full" onClick={clearCart}>
            Clear cart
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
