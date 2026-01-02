import React, { useState } from "react";
import { MdAdd, MdClose, MdRemove } from "react-icons/md";

const CartItem = ({item, handleRemove}) => {
  const [productCount, setProductCount] = useState(1);

  const handleProductDecrease = () => {
    if (productCount > 1) {
      setProductCount((prevCount) => prevCount - 1);
    }
  };
  console.log(item);
  return (
    <div
      key={item.id}
      className="flex items-center gap-6 py-8 border-b border-gray-100 last:border-0"
    >
      {/* Product Image */}
      <div className="w-20 h-20 shrink-0">
        <img
          src={item.media.primary_image}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Text */}
      <div className="grow max-w-70">
        <h3 className="text-sm font-bold leading-tight">{item.name}</h3>
        <p className="text-[11px] text-gray-400 mt-1">
          #{item.id}225139526913{item.id}
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleProductDecrease}
          className="text-gray-400 cursor-pointer"
        >
          <MdRemove size={16} />
        </button>
        <div className="w-10 h-8 border border-gray-200 flex items-center justify-center rounded text-sm font-medium">
          {productCount}
        </div>
        <button
          onClick={() => setProductCount((prevCount) => prevCount + 1)}
          className="text-gray-400 cursor-pointer"
        >
          <MdAdd size={16} />
        </button>
      </div>

      {/* Price */}
      <div className="grow text-right">
        <span className="font-bold text-lg">${item.pricing.current_price}</span>
      </div>

      {/* Close Icon */}
      <button
        onClick={() => handleRemove(item)}
        className="ml-4 text-gray-300 cursor-pointer"
      >
        <MdClose size={20} />
      </button>
    </div>
  );
};

export default CartItem;
