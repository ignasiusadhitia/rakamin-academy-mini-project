import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../hooks/HttpRequests";

const Product = () => {
  const { productId } = useParams();

  const url = `https://fakestoreapi.com/products/${productId}`;

  let product = useAxiosGet(url);

  let content;

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = <ProductCard product={product.data} back />;
  }

  if (product.error) {
    content = <NotFound />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ShopApp | Product";
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-28 p-4 max-w-md flex items-center">
      {content}
    </div>
  );
};

export default Product;
