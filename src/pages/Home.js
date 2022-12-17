import React, { useEffect } from "react";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../hooks/HttpRequests";

const Home = () => {
  const url = "https://fakestoreapi.com/products";

  let products = useAxiosGet(url);

  const dummyProducts = [1, 2, 3, 4, 5, 6, 7, 8];

  let content = null;

  if (products.loading) {
    content = (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dummyProducts.map((index) => (
          <Loader key={index} />
        ))}
      </div>
    );
  }

  if (products.data) {
    content = (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.data.map((product) => (
          <ProductCard product={product} substringed key={product.id} />
        ))}
      </div>
    );
  }

  if (products.error) {
    content = <NotFound />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto mb-28">
      {!products.error && (
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
          Best Sellers
        </h1>
      )}

      {content}
    </div>
  );
};

export default Home;
