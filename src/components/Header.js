import React, { useState } from "react";
import { Link } from "react-router-dom";
import DesktopMenus from "./DesktopMenus";
import MobileToggleButton from "./MobileToggleButton";
import MobileMenus from "./MobileMenus";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const hideMobileMenuHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      {showMobileMenu && <MobileMenus hideMobileMenu={hideMobileMenuHandler} />}
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ShopApp
          </span>
        </Link>
        <MobileToggleButton showMobileMenu={showMobileMenuHandler} />
        <DesktopMenus />
      </div>
    </nav>
  );
};

export default Header;
