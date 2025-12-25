import { useState, useRef, useEffect, useContext } from "react";
import Logo from "../../assets/Logo.png";
import {
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
  FiHelpCircle,
  FiShoppingBag,
} from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { authContext } from "../../Context/Context";

const Header = () => {
  const { user, setUser, LogOutUser } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdowns on window resize to prevent layout breaking
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserDropdownOpen(false); // Close other menu
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsMenuOpen(false); // Close other menu
  };

  const handleSignOut = () => {
    LogOutUser()
      .then(() => {
        setUser(null);
        console.log("User Logged Out successfully.");
      })
      .catch((err) => console.log(err.message));
    setIsUserDropdownOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[100]">
      <div className="2xl:max-w-[1280px] lg:max-w-[1120px] py-3 md:py-4 px-4 flex justify-between items-center mx-auto relative">
        {/* --- Left: Logo & Search --- */}
        <div className="flex items-center gap-4 lg:gap-12">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img className="h-8 md:h-10 w-auto" src={Logo} alt="Logo" />
          </Link>

          <div className="relative hidden md:block">
            <FiSearch className="absolute top-1/2 -translate-y-1/2 text-xl ml-4 text-[#989898]" />
            <input
              className="bg-[#f5f5f5] p-3 pl-10 rounded-lg outline-none text-[#656565] text-sm w-[200px] lg:w-[300px]"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* --- Right: Nav & Icons --- */}
        <nav className="flex items-center gap-3 md:gap-8">
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-base">
            <NavLink
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-black" : "text-[#b5b5b5] hover:text-black"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-black" : "text-[#b5b5b5] hover:text-black"
                }`
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-black" : "text-[#b5b5b5] hover:text-black"
                }`
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-black" : "text-[#b5b5b5] hover:text-black"
                }`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-black" : "text-[#b5b5b5] hover:text-black"
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          <div className="flex items-center gap-3 md:gap-6">
            <Link to="/wishlist">
              <HiOutlineHeart
                className="text-[#1a1a1a] hover:text-red-500 transition-colors"
                size={26}
              />
            </Link>

            <Link to="/cart">
              <IoCartOutline
                className="text-[#1a1a1a] hover:text-blue-500 transition-colors"
                size={26}
              />
            </Link>

            {/* --- USER DROPDOWN (RESPONSIVE) --- */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleUserDropdown}
                className="flex items-center justify-center text-[#1a1a1a] cursor-pointer"
              >
                {user ? (
                  <img src={user.photoURL} className="w-7 rounded-full" />
                ) : (
                  <FiUser size={26} />
                )}
                {/* <FiUser size={26} /> */}
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-3 w-70 md:w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 z-110 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-4 text-center">
                    {user ? (
                      <p className="text-sm font-bold text-black">
                        Hey,{user.displayName} Welcome to E-Store
                      </p>
                    ) : (
                      <p className="text-[11px] text-gray-400 mt-1">
                        Login to manage orders
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2 px-2">
                    {user ? (
                      <Link
                        to="/login"
                        onClick={handleSignOut}
                        className="w-full py-3 bg-black text-white text-center rounded-xl text-xs font-bold uppercase tracking-widest"
                      >
                        Logout
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="w-full py-3 bg-black text-white text-center rounded-xl text-xs font-bold uppercase tracking-widest"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="w-full py-3 border border-black text-black text-center rounded-xl text-xs font-bold uppercase tracking-widest"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>

                  <div className="my-3 border-t border-gray-50 mx-2" />
                </div>
              )}
            </div>

            {/* Hamburger (Mobile Only) */}
            <button
              className="md:hidden text-black cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* --- MOBILE NAV (FLOATING OVERLAY) --- */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 z-90 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-5 space-y-6">
          <div className="relative">
            <FiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-[#989898]" />
            <input
              className="bg-[#f5f5f5] w-full p-3 pl-11 rounded-lg outline-none text-sm"
              placeholder="Search products..."
            />
          </div>

          <ul className="flex flex-col gap-1">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block p-3 rounded-xl text-base font-bold ${
                  isActive ? "bg-gray-50 text-black" : "text-gray-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block p-3 rounded-xl text-base font-bold ${
                  isActive ? "bg-gray-50 text-black" : "text-gray-400"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/blogs"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block p-3 rounded-xl text-base font-bold ${
                  isActive ? "bg-gray-50 text-black" : "text-gray-400"
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block p-3 rounded-xl text-base font-bold ${
                  isActive ? "bg-gray-50 text-black" : "text-gray-400"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block p-3 rounded-xl text-base font-bold ${
                  isActive ? "bg-gray-50 text-black" : "text-gray-400"
                }`
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
