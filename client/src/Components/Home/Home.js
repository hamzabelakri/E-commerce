import "./Home.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";
import ProductCard from "../ProductCard/ProductCard";
import { Spinner } from "react-bootstrap";

function Home() {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      {products.length === 0 ? (
        <Spinner animation="border" variant="success" />
      ) : (
        products.map((elt) => <ProductCard key={elt._id} elt={elt} />)
      )}

      <div className="homescreen__products"></div>
    </div>
  );
}

export default Home;
