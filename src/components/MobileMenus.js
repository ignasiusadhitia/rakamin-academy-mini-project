import React from "react";
import { Link } from "react-router-dom";

const MobileMenus = ({ hideMobileMenu }) => {
  return (
    <div
      className="w-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
      onClick={hideMobileMenu}
    >
      <ul
        id="drawer-example"
        className="h-screen p-4 md:text-sm md:font-medium  bg-white w-4/5 dark:bg-gray-800 "
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <li onClick={hideMobileMenu}>
          <Link
            to="/"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li onClick={hideMobileMenu}>
          <Link
            to="/about"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </Link>
        </li>
        <li onClick={hideMobileMenu}>
          <Link
            to="/contact"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenus;
