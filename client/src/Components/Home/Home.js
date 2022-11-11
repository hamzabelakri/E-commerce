import "./Home.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";
import ProductCard from "../ProductCard/ProductCard"

function Home() {
  const state = useSelector((state) => state.ProductReducer);
  console.log(state)  
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      
    <ProductCard />
      
      <div className="homescreen__products"></div>
    </div>
  );
}

export default Home;
