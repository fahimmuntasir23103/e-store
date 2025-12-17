import { useState } from "react";
import { FiSearch, FiHeart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import PrimaryProduct from "../../Components/PrimaryProduct/PrimaryProduct";

const Shop = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

//   const products = [
//     {
//       id: 1,
//       name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
//       price: "$1437",
//       image:
//         "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=200&h=200&fit=crop",
//     },
//     {
//       id: 2,
//       name: "Apple iPhone 11 128GB White (MQ233)",
//       price: "$510",
//       image:
//         "https://images.unsplash.com/photo-1592286927505-c0d0eb5ee9d2?w=200&h=200&fit=crop",
//     },
//     {
//       id: 3,
//       name: "Apple iPhone 11 128GB White (MQ233)",
//       price: "$550",
//       image:
//         "https://images.unsplash.com/photo-1592286927505-c0d0eb5ee9d2?w=200&h=200&fit=crop",
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
//       price: "$1499",
//       image:
//         "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=200&h=200&fit=crop",
//     },
//     {
//       id: 5,
//       name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
//       price: "$1399",
//       image:
//         "https://images.unsplash.com/photo-1678652197662-01f4f75d744b?w=200&h=200&fit=crop",
//     },
//     {
//       id: 6,
//       name: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
//       price: "$1600",
//       image:
//         "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=200&h=200&fit=crop",
//     },
//   ];

  const brands = [
    { name: "Apple", count: 110, checked: true },
    { name: "Samsung", count: 125 },
    { name: "Xiaomi", count: 68 },
    { name: "Poco", count: 44 },
    { name: "OPPO", count: 36 },
    { name: "Honor", count: 10 },
    { name: "Motorola", count: 34 },
    { name: "Nokia", count: 22 },
    { name: "Realme", count: 35 },
  ];

  const filters = [
    "Battery capacity",
    "Screen type",
    "Screen diagonal",
    "Protection class",
    "Built-in memory",
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white z-90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4 md:space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm md:text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm md:text-base"
              >
                Catalog
              </a>
              <a
                href="#"
                className="text-gray-900 font-medium text-sm md:text-base"
              >
                Smartphones
              </a>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-[110]"
            >
              {sidebarOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="flex gap-4 md:gap-6 relative">
          {/* Sidebar Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 bg-opacity-50 z-[90] lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
              fixed lg:static top-0 left-0 h-full lg:h-auto
              w-72 lg:w-64 bg-white z-[95] lg:z-0
              transform transition-transform duration-300 ease-in-out
              ${
                sidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }
              overflow-y-auto
            `}
          >
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Close button for mobile */}
              <div className="flex justify-between items-center lg:hidden pb-4 border-b">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Brand Filter */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Brand</h3>
                  <FiChevronDown className="text-gray-400" />
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Brand List */}
                <div className="space-y-3">
                  {brands.map((brand, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={brand.checked}
                        className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="ml-3 text-sm text-gray-700">
                        {brand.name}
                      </span>
                      <span className="ml-auto text-xs text-gray-400">
                        {brand.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              {filters.map((filter, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">{filter}</h3>
                    <FiChevronDown className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-4 md:p-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
                <h2 className="text-base md:text-lg font-semibold text-gray-900">
                  Selected Products: <span className="font-bold">85</span>
                </h2>
                <select className="px-3 md:px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-10">
                  <option>By rating</option>
                  <option>By price: Low to High</option>
                  <option>By price: High to Low</option>
                </select>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* {products.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                      Wishlist Icon
                      <div className="flex justify-end mb-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <FiHeart className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>

                      Product Image
                      <div className="flex justify-center mb-3 md:mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
                        />
                      </div>

                      Product Info
                      <h3 className="text-xs sm:text-sm text-gray-900 mb-3 md:mb-4 text-center h-8 md:h-10 line-clamp-2">
                        {product.name}
                      </h3>

                      Price
                      <p className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-3 md:mb-4">
                        {product.price}
                      </p>

                      Buy Button
                      <button className="w-full bg-black text-white py-2.5 md:py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base">
                        Buy Now
                      </button>
                    </div>
                  ))} */}
                <PrimaryProduct />
                <PrimaryProduct />
                <PrimaryProduct />
                <PrimaryProduct />
                <PrimaryProduct />
                <PrimaryProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
