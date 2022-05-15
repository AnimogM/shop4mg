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
import { useGlobalContext } from "../context/context";
// import { FaTimes } from "react-icons/fa";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    onClose,
    isOpen,
    state: { cartItems, totalAmount, totalPrice },
    dispatch,
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
              <Text>Your cart is empty</Text>
              <Button
                variant="outline"
                w="200px"
                colorScheme="blue"
                mt="10"
              >
                continue shopping
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
            <Text>{totalAmount}</Text>
            <Text fontWeight="bold" color="blue.600">
              total: ${totalPrice}
            </Text>
          </Box>
          <Button
            colorScheme="red"
            w="full"
            onClick={() => dispatch({ type: "CLEARCART" })}
          >
            Clear cart
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
