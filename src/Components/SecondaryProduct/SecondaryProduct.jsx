import Ipad from "../../assets/iPad.png";

const SecondaryProduct = ({bgColor}) => {
    return (
        <div className="" style={{backgroundColor: bgColor}}>
          <img src={Ipad} alt="" />
          <div className="space-y-4 p-8 pt-0">
            <h2 className="font-light text-[33px]">Ipad Pro</h2>
            <p className="font-medium text-sm text-[#909090] leading-6">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className=" font-medium text-base text-black border rounded-lg py-4 px-14 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
    );
};

export default SecondaryProduct;