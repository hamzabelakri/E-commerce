import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Cart from "./Components/Cart/Cart"
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
        <Route path="/Cart" element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
