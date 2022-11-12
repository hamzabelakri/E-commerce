import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CustomNavbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
