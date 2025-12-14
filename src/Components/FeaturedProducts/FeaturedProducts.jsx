import playStation from "../../assets/PlayStation.png";
import Macbook from "../../assets/MacBookPro14.png";
import Headset from "../../assets/Headset.png";
import VrHeadset from "../../assets/VrHeadset.png";
const FeaturedProducts = () => {
  return (
    <section className="2xl:max-w-[1280px] mx-auto">
      <div className="grid grid-cols-2 overflow-hidden">
        <div className="grid grid-cols-1">
          <div className="flex items-center">
            <img src={playStation} alt="" />
            <div className="mx-16 space-y-4">
              <h2 className="font-medium text-5xl">Playstation 5</h2>
              <p className="font-medium text-sm text-[#909090] leading-6">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center bg-[#EDEDED]">
              <img src={Headset} alt="" />
              <div className="text-[#909090] px-12 py-16">
                <h2 className="font-light  text-black text-3xl mb-2">
                  Apple AirPods <span className="font-medium">Max</span>
                </h2>
                <p className="font-medium text-sm text-[#909090] leading-6">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#353535]">
              <img src={VrHeadset} alt="" />
              <div className="text-[#909090] px-4 py-6">
                <h2 className="font-light  text-[#EDEDED] text-3xl mb-2">
                  Apple Vision <span className="font-medium">Pro</span>
                </h2>
                <p className="font-medium text-sm text-[#909090] leading-6">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-[#EDEDED]">
          <div className="space-y-4 ml-14">
            <h2 className="font-extralight text-black text-[64px] mb-2">
              Macbook <span className="font-medium">Air</span>
            </h2>
            <p className="font-medium text-sm text-[#909090] leading-6">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className=" font-medium text-base text-black border rounded-lg py-4 px-14 cursor-pointer">
              Shop Now
            </button>
          </div>
          <img src={Macbook} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
