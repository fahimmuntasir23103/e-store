import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { FiSearch, FiUser, FiMenu, FiX, FiHelpCircle, FiShoppingBag, FiUserPlus } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle this for testing
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm z-50 sticky top-0">
      <div className="2xl:max-w-[1280px] lg:max-w-[1120px] py-4 px-4 flex justify-between items-center mx-auto">
        
        {/* --- Left Section --- */}
        <div className="flex items-center gap-4 lg:gap-12">
          <Link to="/">
            <img className="cursor-pointer h-10 w-auto" src={Logo} alt="Logo" />
          </Link>

          <div className="relative hidden md:block">
            <FiSearch className="absolute top-1/2 -translate-y-1/2 text-xl ml-4 text-[#989898]" />
            <input
              className="bg-[#f5f5f5] p-3 pl-10 rounded-lg outline-none text-[#656565] text-sm w-[200px] lg:w-[300px] transition-all"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* --- Right Section --- */}
        <nav className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-base font-medium">
            {["Home", "Shop", "Blogs", "About", "Contact"].map((item) => (
              <li key={item} className="text-[#b5b5b5] hover:text-black duration-200">
                <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}>
                  {item === "Contact" ? "Contact Us" : item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 lg:gap-6">
            <Link to="/wishlist">
              <HiOutlineHeart className="cursor-pointer hover:text-red-500 duration-200" size={28} />
            </Link>
            <Link to="/cart">
              <IoCartOutline className="cursor-pointer hover:text-blue-500 duration-200" size={28} />
            </Link>

            {/* --- GUEST USER DROPDOWN --- */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <FiUser
                className={`cursor-pointer duration-200 ${isUserDropdownOpen ? "text-black" : "text-[#1a1a1a] hover:text-gray-500"}`}
                size={28}
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              />
              
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Guest Header */}
                  <div className="px-4 py-4 text-center">
                    <p className="text-sm font-bold text-black mb-1">Welcome to E-Store</p>
                    <p className="text-[11px] text-gray-400 font-medium">Login to manage orders and wishlist</p>
                  </div>

                  {/* Primary Actions */}
                  <div className="space-y-2 px-2">
                    <Link 
                      to="/login"
                      onClick={() => setIsUserDropdownOpen(false)}
                      className="w-full flex items-center justify-center py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all"
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register"
                      onClick={() => setIsUserDropdownOpen(false)}
                      className="w-full flex items-center justify-center py-3 border border-black text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all"
                    >
                      Create Account
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="my-3 border-t border-gray-50 mx-2"></div>

                  {/* Secondary Links */}
                  <div className="px-1 pb-1">
                    {[
                      { icon: <FiShoppingBag />, label: "Track Order", path: "/track" },
                      { icon: <FiHelpCircle />, label: "Help Center", path: "/help" },
                    ].map((item, i) => (
                      <Link 
                        key={i} 
                        to={item.path} 
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all text-gray-600 hover:text-black group"
                      >
                        <span className="text-gray-400 group-hover:text-black">{item.icon}</span>
                        <span className="text-sm font-semibold">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;