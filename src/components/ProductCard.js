import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, substringed, back }) => {
  const { id, image, title, price, description } = product;

  return (
    <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow-md transition duration-150 ease-out hover:ease-in hover:scale-105 dark:bg-gray-800 dark:border-gray-700 ">
      <div
        className="h-64 mb-5 bg-contain bg-no-repeat bg-center rounded-t-lg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div>
        <div className="flex flex-col">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {substringed ? title.substring(0, 20) + "..." : title}
          </h5>
          <h6 className="my-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            $ {price}
          </h6>
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {substringed ? description.substring(0, 100) + "..." : description}
        </p>
        {back ? (
          <Link to="/">
            <button className="items-center px-3 py-2 text-sm w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Back
            </button>
          </Link>
        ) : (
          <Link to={`/products/${id}`}>
            <button className="items-center px-3 py-2 text-sm w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
