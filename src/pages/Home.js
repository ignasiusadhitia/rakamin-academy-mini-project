import React from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <ProductCard />
      <Loader />
    </div>
  );
};

export default Home;
