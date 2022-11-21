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
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Trending ...
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length === 0 ? (
            <Spinner animation="border" variant="success" />
          ) : (
            products.map((elt) => <ProductCard key={elt._id} elt={elt} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
