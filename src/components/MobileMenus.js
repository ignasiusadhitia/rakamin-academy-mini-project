import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenus = ({ hideMobileMenu }) => {
  const menuItemSelected =
    "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white";
  const menuItemNotSelected =
    "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent";
  return (
    <div
      id="drawer-example"
      className="w-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
      tabIndex="-1"
      aria-labelledby="drawer-label"
      onClick={hideMobileMenu}
    >
      <ul className="h-screen p-4 bg-white w-4/5 dark:bg-gray-800 ">
        <li onClick={hideMobileMenu}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? menuItemSelected : menuItemNotSelected
            }
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li onClick={hideMobileMenu}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? menuItemSelected : menuItemNotSelected
            }
          >
            About
          </NavLink>
        </li>
        <li onClick={hideMobileMenu}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? menuItemSelected : menuItemNotSelected
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenus;
