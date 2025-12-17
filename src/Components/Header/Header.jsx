import React, { useState } from "react";
import Logo from "../../assets/Logo.png"; // Update path
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm z-50 sticky top-0">
      <div className="2xl:max-w-[1280px] lg:max-w-[1120px] py-4 px-4 flex justify-between items-center mx-auto">
        {/* --- Left Section: Logo & Search (Desktop) --- */}
        <div className="flex items-center gap-4 lg:gap-12">
          <img className="cursor-pointer h-10 w-auto" src={Logo} alt="Logo" />

          {/* Search Bar - Hidden on Mobile, Visible on Tablet/Desktop */}
          <div className="relative hidden md:block">
            <FiSearch className="absolute top-1/2 -translate-y-1/2 text-xl ml-4 text-[#989898]" />
            <input
              className="bg-[#f5f5f5] p-3 pl-10 rounded-lg outline-none text-[#656565] text-sm w-[200px] lg:w-[300px] transition-all"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* --- Right Section: Nav & Icons (Desktop) --- */}
        <nav className="flex items-center gap-8">
          {/* Desktop Menu Links - Hidden on Mobile */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-base">
            <li className="text-[#b5b5b5] cursor-pointer hover:text-gray-900 duration-200">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer hover:text-gray-900 duration-200">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer hover:text-gray-900 duration-200">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer hover:text-gray-900 duration-200">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer hover:text-gray-900 duration-200">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            <HiOutlineHeart
              className="cursor-pointer hover:text-red-500 duration-200"
              size={28}
            />
            <IoCartOutline
              className="cursor-pointer hover:text-blue-500 duration-200"
              size={28}
            />
            {/* Hide User on mobile to save space, or keep it if preferred */}
            <FiUser
              className="cursor-pointer hidden sm:block hover:text-gray-900 duration-200"
              size={28}
            />

            {/* Hamburger Icon - Visible only on Mobile */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </div>
          </div>
        </nav>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 pb-6 flex flex-col gap-4 border-t border-gray-100 shadow-lg absolute w-full left-0">
          {/* Mobile Search Input */}
          <div className="relative mt-4">
            <FiSearch className="absolute top-1/2 -translate-y-1/2 text-xl ml-4 text-[#989898]" />
            <input
              className="bg-[#f5f5f5] w-full p-3 pl-10 rounded-lg outline-none text-[#656565] text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* Mobile NavLinks */}
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li className="cursor-pointer border-b border-gray-50 pb-2 hover:text-gray-900">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer border-b border-gray-50 pb-2 hover:text-gray-900">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer border-b border-gray-50 pb-2 hover:text-gray-900">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer border-b border-gray-50 pb-2 hover:text-gray-900">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="text-[#b5b5b5] cursor-pointer hover:text-gray-900">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="flex items-center gap-2 cursor-pointer pt-2 text-[#b5b5b5] sm:hidden">
              <FiUser size={20} /> Account
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
