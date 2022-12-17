import React, { useEffect } from "react";
import profilePicture from "../assets/images/profile-pic.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-md flex items-center">
      <div className="w-full max-w-sm mt-10 dark:bg-gray-800">
        <div className="flex flex-col items-center text-center p-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={profilePicture}
            alt="Profile"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Ignasius Yuda Adhitia
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Front-End Web Development Enthusiasts
          </span>
          <div className="w-full flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://ignasiusadhitia.com"
              className="w-full items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <button>Contact Me!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
