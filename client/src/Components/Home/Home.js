
import "./Home.css";
import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import {getAllProducts} from "../../Redux/Actions/productAction";

function Home() {



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
   
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        
       
      </div>
    </div>
  )
}

export default Home