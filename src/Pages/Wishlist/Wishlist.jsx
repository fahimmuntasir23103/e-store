import { useContext } from "react";
import { MdClose, MdOutlineShoppingCart, MdChevronRight } from "react-icons/md";
import { cartContext, wishListContext } from "../../Context/Context";
import { Link } from "react-router";

export default function Wishlist() {
  const { wishList, handleRemove } = useContext(wishListContext);
  const { handleCart } = useContext(cartContext);

  const handleMoveToCart = (product) => {
    console.log("move = ", product);
    handleRemove(product);
    handleCart(product);
  };
  // console.log(wishList[0])
  return (
    <div className="bg-white min-h-screen text-black font-sans p-6 md:p-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: WISHLIST ITEMS */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl font-bold uppercase tracking-tight">
              My Wishlist
            </h1>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              {wishList.length} Saved Items
            </span>
          </div>

          <div className="space-y-0">
            {wishList.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 py-8 border-b border-gray-100 last:border-0"
              >
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 bg-[#FBFBFB] rounded-lg">
                  <img
                    src={item.media.primary_image}
                    alt=""
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Product Text */}
                <div className="flex-grow max-w-[280px]">
                  <h3 className="text-sm font-bold leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
                    #{item.id}251395269139{item.id}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                    {item.status}
                  </span>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="font-bold text-lg">
                    ${item.pricing.current_price}
                  </span>
                </div>

                {/* Move to Cart Button */}
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="ml-4 p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <MdOutlineShoppingCart size={18} />
                </button>

                {/* Remove Icon */}
                <button
                  onClick={() => handleRemove(item)}
                  className="ml-2 text-gray-300 hover:text-black cursor-pointer"
                >
                  <MdClose size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: ACCOUNT / QUICK ACTIONS (Matching the Summary Box Style) */}
        <div className="lg:col-span-5">
          <div className="border border-gray-100 rounded-xl p-8 md:p-10 sticky top-10">
            <h2 className="text-lg font-bold mb-8 uppercase tracking-tight">
              Wishlist Summary
            </h2>

            <div className="space-y-6">
              <div className="bg-[#FBFBFB] p-6 rounded-lg">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Items in your wishlist are not reserved. Add them to your cart
                  to complete your purchase.
                </p>
              </div>

              <div className="space-y-4 py-4 border-y border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400">
                    Total Value
                  </span>
                  <span className="font-bold text-lg">$2,347</span>
                </div>
              </div>

              {/* Primary Action */}
              <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                Move All To Cart
              </button>

              {/* Secondary Navigation */}
              <Link
                to="/shop"
                className="w-full border border-black py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Continue Shopping <MdChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
