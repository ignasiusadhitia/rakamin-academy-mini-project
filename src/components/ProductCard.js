import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md transition duration-150 ease-out hover:ease-in hover:scale-105 dark:bg-gray-800 dark:border-gray-700 ">
      <div
        className="h-64 bg-contain bg-no-repeat bg-center rounded-t-lg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="p-5">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <h6 className="my-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            $ {price}
          </h6>
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button className="items-center px-3 py-2 text-sm w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
