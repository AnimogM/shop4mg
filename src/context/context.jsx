import { useContext, createContext, useReducer } from "react";
import reducer from "../reducer/reducer.js";
import IMG from "../assets/cool-background 2.png";
import { useDisclosure } from "@chakra-ui/react";

const AppContext = createContext();

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

const AppProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, cart);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const addItem = (id, title, image, price) => {
    dispatch({ type: "ADD", payload: { id, image, title, price } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEARCART" });
  };
  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        removeItem,
        increaseItem,
        decreaseItem,
        onOpen,
        onClose,
        clearCart,
        addItem,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
