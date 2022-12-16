import React from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const products = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
