import { Link } from "react-router";
import { PiHeartStraightLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { cartContext, wishListContext } from "../../Context/Context";
const PrimaryProduct = ({ product }) => {
  const { handleWishlist } = useContext(wishListContext);
  const { handleCart } = useContext(cartContext);

  return (
    <div className="relative border-3 border-[#F6F6F6] rounded-lg pb-6 pt-6">
      <div className="absolute right-10 top-1">
        <PiHeartStraightLight
          onClick={() => handleWishlist(product)}
          className="text-[#8b8b8b] my-4 relative top-2 left-8/10 cursor-pointer"
          size={32}
        />
        <IoCartOutline
          onClick={() => handleCart(product)}
          className="text-[#8b8b8b] my-4 relative top-2 left-8/10 cursor-pointer"
          size={32}
        />
      </div>
      <img
        className="mx-auto my-4 w-40"
        src={product?.media.primary_image}
        alt=""
      />
      <div className="flex flex-col items-center text-center px-4 space-y-4">
        <h2>{product?.name} </h2>
        <span>${product?.pricing.current_price}</span>

        <Link
          to={`/productdetails/${product?.id}`}
          className="font-medium text-sm text-white bg-black py-3 px-16 mt-2 rounded-lg cursor-pointer"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default PrimaryProduct;
