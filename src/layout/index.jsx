import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import Cart from "../components/Cart";
import { useGlobalContext } from "../context/CartContext";

const Layout = ({ children }) => {
  const {isOpen} = useGlobalContext()
  return (
    <Box>
      <Header />
      {isOpen && <Cart/>}
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
