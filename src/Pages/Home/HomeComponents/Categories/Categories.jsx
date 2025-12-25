import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { SlScreenSmartphone } from "react-icons/sl";
import { TbDeviceWatchStats, TbDeviceGamepad } from "react-icons/tb";
import { PiCamera, PiHeadphones } from "react-icons/pi";
import { GrMonitor } from "react-icons/gr";
import { useContext } from "react";
import { dataContext } from "../../../../Context/Context";
import { RxSpeakerLoud } from "react-icons/rx";
import { Link } from "react-router";

const Categories = () => {
  const categories = [
    { name: "Smartphone", icon: <SlScreenSmartphone size={38} /> },
    // {name: "Laptop", icon: }
    // {name: "Tablet", icon: }
    { name: "Headphone", icon: <PiHeadphones size={38} /> },
    { name: "Speaker", icon: <RxSpeakerLoud size={38} /> },
    // {name: "Camera", icon:  }
    { name: "Monitor", icon: <GrMonitor size={38} /> },
    { name: "Gaming Console", icon: <TbDeviceGamepad size={38} /> },
    { name: "Smart Watch", icon: <TbDeviceWatchStats size={38} /> },
  ];
  return (
    <section className="2xl:max-w-[1280px] lg:max-w-[1120px] mx-auto px-4 py-20 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Browse By Category</h2>
        <div className="flex items-center gap-4">
          <GoChevronLeft className="cursor-pointer" size={32} />
          <GoChevronRight className="cursor-pointer" size={32} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-8 justify-between items-center">
        {categories.slice(0, 6).map((category, idx) => (
          <Link to={`/shop?category=${category.name}`}>
            <div
              key={idx}
              className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer"
            >
              {category.icon}
              <h3 className="text-base font-medium mt-3">{category.name}</h3>
            </div>
          </Link>
        ))}
        {/* <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
          <SlScreenSmartphone size={38} />
          <h3 className="text-base font-medium mt-3">Phones</h3>
        </div>
        <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
          <TbDeviceWatchStats size={38} />
          <h3 className="text-base font-medium mt-3">Smart Watches</h3>
        </div>
        <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
          <PiCamera size={38} />
          <h3 className="text-base font-medium mt-3">Cameras</h3>
        </div>
        <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
          <PiHeadphones size={38} />
          <h3 className="text-base font-medium mt-3">Headphones</h3>
        </div>
        <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
          <GrMonitor size={38} />
          <h3 className="text-base font-medium mt-3">Computers</h3>
        </div>
        <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
          <TbDeviceGamepad size={38} />
          <h3 className="text-base font-medium mt-3">Gaming</h3>
        </div> */}
      </div>
    </section>
  );
};

export default Categories;
