import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-lg border-b border-gray-200 dark:bg-gray-900/30 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="text-xl font-semibold text-gray-900 dark:text-white">
          <div className='flex flex-row text-red-600 text-2xl'>
            <img src="src/assets/images/logo-icon.png" alt="Logo" className="h-8" />
            <h1>STK</h1>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-4 relative">
          <Link to="/" className="text-gray-900 dark:text-white hover:text-red-500">Home</Link>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn text-gray-900 dark:text-white hover:text-red-500" onClick={handleDropdownToggle}>
              Products
            </div>
            {isDropdownOpen && (
              <ul tabIndex={0} className="dropdown-content menu bg-white/80 backdrop-blur-md border border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 rounded-box z-[1] w-52 p-2 shadow">
                <li><Link to="/products?category=All" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold" onClick={handleLinkClick}>All</Link></li>
                <li><Link to="/products?category=Men" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold" onClick={handleLinkClick}>Men</Link></li>
                <li><Link to="/products?category=Women" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold" onClick={handleLinkClick}>Women</Link></li>
              </ul>
            )}
          </div>
          <Link to="/how-it-works" className="text-gray-900 dark:text-white hover:text-red-500">How it works?</Link>
        </div>
        <div className="md:hidden flex items-center">
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-red-600">
            Menu
          </label>
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li><Link to="/" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold" onClick={handleLinkClick}>How it works?</Link></li>
              <li><Link to="/products?category=All" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold" onClick={handleLinkClick}>Products</Link></li>
              <li><Link to="/cart" className="text-gray-900 dark:text-white hover:bg-red-500 hover:text-white font-bold flex items-center" onClick={handleLinkClick}>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2.5l1 2h12l1-2H21" />
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="16" cy="21" r="1" />
                </svg>
                My Cart
              </Link></li>
            </ul>
          </div>
        </div>
        <Link to="/cart" className="hidden md:flex items-center text-gray-900 dark:text-white hover:text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
          My Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
