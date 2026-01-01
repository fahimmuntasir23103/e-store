import { useState, useRef, useEffect, useContext } from "react";
import Logo from "../../assets/Logo.png";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { authContext, dataContext } from "../../Context/Context";

const Header = () => {
  const { user, setUser, LogOutUser } = useContext(authContext);
  const { products } = useContext(dataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdowns on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setToggleSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsMenuOpen(false);
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

  const handleSearchClick = () => {
    setToggleSearch(true);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      setToggleSearch(true);
      const filter = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchProducts(filter);
    } else {
      setToggleSearch(false);
      setSearchProducts([]);
    }
  };

  const clearSearch = () => {
    setToggleSearch(false);
    setSearchValue("");
    setSearchProducts([]);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-100">
      <div className="2xl:max-w-7xl lg:max-w-280 py-3 md:py-4 px-4 flex justify-between items-center mx-auto relative">
        {/* --- Left: Logo & Search --- */}
        <div className="flex items-center gap-4 lg:gap-12">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img className="h-8 md:h-10 w-auto" src={Logo} alt="Logo" />
          </Link>

          <div ref={searchRef} className="relative hidden md:block">
            <FiSearch className="absolute top-1/2 -translate-y-1/2 text-xl ml-4 text-[#989898]" />
            <input
              value={searchValue}
              onClick={handleSearchClick}
              onChange={handleSearchChange}
              className="bg-[#f5f5f5] p-3 pl-10 rounded-lg outline-none text-[#656565] text-sm w-[200px] lg:w-[300px]"
              type="text"
              placeholder="Search"
            />
            {toggleSearch && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-110 max-h-96 overflow-y-auto">
                {searchProducts.length <= 0 && (
                  <p className="text-sm text-gray-600">Search Products...</p>
                )}
                {searchProducts.map((searchProduct) => (
                  <div key={searchProduct.id} onClick={clearSearch}>
                    <Link to={`/productdetails/${searchProduct.id}`}>
                      <div className="flex gap-3 py-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <img
                          className="w-20 h-20 p-2 bg-gray-200 rounded object-cover"
                          src={searchProduct.media.primary_image}
                          alt={searchProduct.name}
                        />
                        <div className="flex flex-col justify-center">
                          <span className="text-xs text-gray-500">
                            {searchProduct.category}
                          </span>
                          <h3 className="font-bold text-sm">
                            {searchProduct.name}
                          </h3>
                          <span className="text-sm font-semibold">
                            ${searchProduct.pricing.current_price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Rest of your component remains the same */}
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

            {/* --- USER DROPDOWN --- */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleUserDropdown}
                className="flex items-center justify-center text-[#1a1a1a] cursor-pointer"
              >
                {user ? (
                  <img
                    src={user.photoURL}
                    className="w-7 rounded-full"
                    alt="User"
                  />
                ) : (
                  <FiUser size={26} />
                )}
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-3 w-70 md:w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 z-110 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-4 text-center">
                    {user ? (
                      <p className="text-sm font-bold text-black">
                        Hey, {user.displayName} Welcome to E-Store
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

      {/* --- MOBILE NAV --- */}
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
