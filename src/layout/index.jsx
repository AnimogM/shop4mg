import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
