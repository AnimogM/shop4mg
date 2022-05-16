import { useContext, createContext, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";
import {
  CLEAR_CART,
  ADD_TO_CART,
  INCREASE_ITEM_CART,
  DECREASE_ITEM_CART,
  REMOVE_ITEM_CART,
} from "../actions";
import IMG from "../assets/cool-background 2.png";
import { useDisclosure } from "@chakra-ui/react";

const CartContext = createContext();

const cart = {
  totalPrice: 300,
  totalAmount: 2,
  cartItems: [
    {
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: "300",
      amount: 1,
      id: 1,
      image: IMG,
    },
    {
      title: "Mens Casual ",
      price: "300",
      amount: 1,
      id: 2,
      image: IMG,
    },
  ],
};

const CartProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, cart);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM_CART, payload: id });
  };
  const addItem = (props) => {
    dispatch({ type: ADD_TO_CART, payload: props });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const increaseCartItem = (id) => {
    dispatch({ type: INCREASE_ITEM_CART, payload: id });
  };
  const decreaseCartItem = (id) => {
    dispatch({ type: DECREASE_ITEM_CART, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        removeItem,
        increaseCartItem,
        decreaseCartItem,
        onOpen,
        onClose,
        clearCart,
        addItem,
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useGlobalContext = () => {
  return useContext(CartContext);
};
