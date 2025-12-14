import { GoChevronLeft, GoChevronRight  } from "react-icons/go";
import { SlScreenSmartphone } from "react-icons/sl";
import { TbDeviceWatchStats, TbDeviceGamepad } from "react-icons/tb";
import { PiCamera, PiHeadphones } from "react-icons/pi";
import { GrMonitor } from "react-icons/gr";

const Categories = () => {
    return (
        <section className="2xl:max-w-[1280px] lg:max-w-[1120px] mx-auto px-4 py-20 space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-2xl">Browse By Category</h2>
                <div className="flex items-center gap-4">
                    <GoChevronLeft className="cursor-pointer" size={32}/>
                    <GoChevronRight className="cursor-pointer" size={32}/>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-8 justify-between items-center">
                <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
                    <SlScreenSmartphone size={38}/>
                    <h3 className="text-base font-medium mt-3">Phones</h3>
                </div>
                <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
                    <TbDeviceWatchStats size={38}/>
                    <h3 className="text-base font-medium mt-3">Smart Watches</h3>
                </div>
                <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
                    <PiCamera size={38}/>
                    <h3 className="text-base font-medium mt-3">Cameras</h3>
                </div>
                <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
                    <PiHeadphones size={38}/>
                    <h3 className="text-base font-medium mt-3">Headphones</h3>
                </div>
                <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
                    <GrMonitor size={38}/>
                    <h3 className="text-base font-medium mt-3">Computers</h3>
                </div>
                <div className="bg-[#EDEDED] rounded-2xl flex flex-col items-center py-7 cursor-pointer">
                    <TbDeviceGamepad size={38}/>
                    <h3 className="text-base font-medium mt-3">Gaming</h3>
                </div>
            </div>
        </section>
    );
};

export default Categories;