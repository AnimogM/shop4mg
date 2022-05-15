import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/store" element={<Store/>}/>
    </Routes>
  );
}

export default App;
