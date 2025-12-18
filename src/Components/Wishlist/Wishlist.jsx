import React from 'react';
import { MdClose, MdOutlineShoppingCart, MdChevronRight } from 'react-icons/md';

const wishlistItems = [
  {
    id: "#25139526913984",
    name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
    price: "1399",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=200"
  },
  {
    id: "#53459358345",
    name: "AirPods Max Silver",
    price: "549",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=200"
  },
  {
    id: "#69632324",
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: "399",
    status: "Limited Stock",
    img: "https://images.unsplash.com/photo-1544117518-30dd0f787a3b?q=80&w=200"
  }
];

export default function Wishlist() {
  return (
    <div className="bg-white min-h-screen text-black font-sans p-6 md:p-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: WISHLIST ITEMS */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl font-bold uppercase tracking-tight">My Wishlist</h1>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{wishlistItems.length} Saved Items</span>
          </div>
          
          <div className="space-y-0">
            {wishlistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 py-8 border-b border-gray-100 last:border-0">
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 bg-[#FBFBFB] rounded-lg">
                  <img src={item.img} alt="" className="w-full h-full object-contain p-2" />
                </div>
                
                {/* Product Text */}
                <div className="flex-grow max-w-[280px]">
                  <h3 className="text-sm font-bold leading-tight">{item.name}</h3>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">{item.id}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                    {item.status}
                  </span>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="font-bold text-lg">${item.price}</span>
                </div>

                {/* Move to Cart Button */}
                <button className="ml-4 p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <MdOutlineShoppingCart size={18} />
                </button>

                {/* Remove Icon */}
                <button className="ml-2 text-gray-300 hover:text-black">
                  <MdClose size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: ACCOUNT / QUICK ACTIONS (Matching the Summary Box Style) */}
        <div className="lg:col-span-5">
          <div className="border border-gray-100 rounded-xl p-8 md:p-10 sticky top-10">
            <h2 className="text-lg font-bold mb-8 uppercase tracking-tight">Wishlist Summary</h2>
            
            <div className="space-y-6">
              <div className="bg-[#FBFBFB] p-6 rounded-lg">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Items in your wishlist are not reserved. Add them to your cart to complete your purchase.
                </p>
              </div>

              <div className="space-y-4 py-4 border-y border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400">Total Value</span>
                  <span className="font-bold text-lg">$2,347</span>
                </div>
              </div>

              {/* Primary Action */}
              <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                Move All To Cart
              </button>

              {/* Secondary Navigation */}
              <button className="w-full border border-black py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                Continue Shopping <MdChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}