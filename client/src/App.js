import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CustomNavbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import AdminProfile from "./Components/Admin/AdminProfile";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserCard from "./Components/Admin/UserCard";
import UserDetails from "./Components/Admin/UserDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import LandingPage from "./Components/LandingPage/LandingPage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"
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
        <Route path="/admin" element={<AdminProfile />} /> 
        <Route path="/profile" element={<UserProfile />} /> 
        <Route path="/usercard" element={<UserCard />} /> 
        <Route path="/user/:id" element={<UserDetails />} /> 
        <Route path="landingpage" element={<LandingPage />} /> 
        <Route path="contact" element={<Contact />} /> 

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
