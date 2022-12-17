import React from "react";
import background from "../assets/images/background.jpeg";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full mx-auto mt-5 p-4 text-center bg-white sm:p-8 dark:bg-gray-800">
        <div
          className="h-64 mb-8 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <h5 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          ShopApp is the leading e-commerce catalog in Southeast Asia and
          Taiwan.
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Launched in 2015, it is a platform tailored for the region, providing
          customers with an easy, secure and fast online shopping experience
          through strong payment and fulfillment support. We believe online
          shopping should be accessible, easy and enjoyable. This is the vision
          ShopApp aspires to deliver on the platform, every single day.
        </p>
      </div>
    </div>
  );
};

export default About;
