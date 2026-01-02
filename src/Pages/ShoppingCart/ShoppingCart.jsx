import { useContext, useState } from "react";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";
import { Link } from "react-router";
import { cartContext } from "../../Context/Context";
import CartItem from "../../Components/CartItem/CartItem";

const ShoppingCart = () => {
  const { handleRemove, cart } = useContext(cartContext);

  // console.log(cart)
  
  return (
    <div className="bg-white min-h-screen text-black font-sans p-6 md:p-20">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-xl font-bold mb-10">Shopping Cart</h1>

          <div className="space-y-0">
            {cart.map((item) => (
              <CartItem key={item.id} handleRemove={handleRemove} item={item}/>
            ))}
          </div>
        </div>


        <div className="lg:col-span-5">
          <div className="border border-gray-100 rounded-xl p-8 md:p-10">
            <h2 className="text-lg font-bold mb-8">Order Summary</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-gray-500">
                  Discount code / Promo code
                </label>
                <input
                  type="text"
                  placeholder="Code"
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm outline-none placeholder:text-gray-300"
                />
              </div>

              {/* Bonus Card Input */}
              <div className="space-y-2 pb-6 border-b border-gray-100">
                <label className="text-[11px] font-semibold text-gray-500">
                  Your bonus card number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="w-full border border-gray-200 p-3 pr-20 rounded-lg text-sm outline-none placeholder:text-gray-300"
                  />
                  <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 border border-black rounded-md text-[10px] font-bold bg-white hover:bg-black hover:text-white transition-all">
                    Apply
                  </button>
                </div>
              </div>

              {/* Pricing Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center font-bold text-sm">
                  <span>Subtotal</span>
                  <span>$2347</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 text-sm font-medium">
                  <span>Estimated Tax</span>
                  <span className="text-black font-bold">$50</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 text-sm font-medium">
                  <span>Estimated shipping & Handling</span>
                  <span className="text-black font-bold">$29</span>
                </div>
                <div className="flex justify-between items-center pt-4 font-bold text-lg">
                  <span>Total</span>
                  <span>$2426</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-sm mt-4 hover:bg-gray-900 transition-colors">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
