import React from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <div className="container-sm m-4">
      <Outlet />
    </div>
  );
};

export default Product;
