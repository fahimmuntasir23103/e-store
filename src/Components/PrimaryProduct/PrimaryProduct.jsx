import { Link } from "react-router";
import Iphone from "../../assets/Iphone.png";
import { PiHeartStraightLight } from "react-icons/pi";
const PrimaryProduct = () => {
  return (
    <Link to="/productdetails">
      <div className="bg-[#F6F6F6] rounded-lg pb-6">
        <PiHeartStraightLight
          className="text-[#8b8b8b] my-4 relative top-2 left-8/10"
          size={32}
        />
        <img className="mx-auto my-4 w-40" src={Iphone} alt="" />
        <div className="flex flex-col items-center text-center px-4 space-y-4">
          <h2>Apple iPhone 14 Pro Max 128GB Deep Purple </h2>
          <span>$900</span>
          <button className="font-medium text-sm text-white bg-black py-3 px-16 mt-2 rounded-lg cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PrimaryProduct;
