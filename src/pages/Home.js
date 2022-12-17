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
    <div className="container mx-auto">
      {!products.error && (
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
          Best Sellers
        </h1>
      )}

      {content}

      {!products.error && (
        <div className="w-full p-8 flex justify-center gap-4">
          <button className="w-3/12 md:w-1/12 text-center items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Prev
          </button>
          <button className="w-3/12 md:w-1/12 text-center items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
