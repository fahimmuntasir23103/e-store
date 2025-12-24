import ColorSelector from "../ColorSelector/ColorSelector"
import StorageSelector from "../StorageSelector/StorageSelector"
import SpecsGrid  from "../SpecsGrid/SpecsGrid"
import DeliveryInfo  from "../DeliveryInfo/DeliveryInfo"
import { useContext } from "react";
import { cartContext, wishListContext } from "../../../../Context/Context";
const ProductInfo = ({
  product,
  name,
  price,
  originalPrice,
  colors,
  selectedColor,
  onColorChange,
  storageOptions,
  selectedStorage,
  onStorageChange,
  specs,
  description,
}) => {
  const {handleWishlist} = useContext(wishListContext)
  const {handleCart} = useContext(cartContext)
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{name}</h1>

      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-xl text-gray-400 line-through">
          ${originalPrice}
        </span>
      </div>

      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={onColorChange}
      />

      <StorageSelector
        options={storageOptions}
        selectedStorage={selectedStorage}
        onStorageChange={onStorageChange}
      />

      <SpecsGrid specs={specs} />

      <p className="text-sm text-gray-600 mb-6">
        {description}
        <a href="#" className="text-black font-medium ml-1">
          more...
        </a>
      </p>

      <div className="flex gap-3 mb-6">
        <button onClick={()=> handleWishlist(product)} className="flex-1 py-3 border-2 border-black rounded-lg font-medium hover:bg-gray-50 cursor-pointer">
          Add to Wishlist
        </button>
        <button onClick={()=>handleCart(product)} className="flex-1 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 cursor-pointer">
          Add to Card
        </button>
      </div>

      <DeliveryInfo />
    </div>
  );
};

export default ProductInfo