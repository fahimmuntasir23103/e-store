import { Link } from "react-router";
import SalesBannerImg from "../../../../assets/banner1.png";

const SalesBanner = () => {
  return (
    <div className="2xl:max-w-[1280px] mx-auto relative">
      <img className="" src={SalesBannerImg} alt="" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
        <h2 className="text-7xl font-thin text-white mb-2 tracking-wide">
          Big Summer <span className="font-medium">Sale</span>
        </h2>
        <p className="text-base font-normal text-[#787878]">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <Link to="/shop">
        <button className="font-medium text-base text-white border-2 border-[#909090] rounded-lg py-4 px-14 mt-10 cursor-pointer">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SalesBanner;
