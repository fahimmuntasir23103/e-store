import heroImage from "../../assets/IphoneImage.png";
const Hero = () => {
  return (
    <section className="bg-[#211C24]">
      <div className="2xl:max-w-[1280px] lg:max-w-[1120px] mx-auto px-4 text-[#909090] flex justify-between items-center gap-32">
        <div className="space-y-6">
          <h3 className=" font-semibold text-2xl">Pro.Beyond.</h3>
          <h1 className="text-8xl font-thin">
            IPhone 14 <span className="font-semibold text-white">Pro</span>
          </h1>
          <p className="font-medium text-lg">
            Created to change everything for the better. For everyone
          </p>
          <button className=" font-medium text-base text-white border-2 border-[#909090] rounded-lg py-4 px-14 cursor-pointer">
            Shop Now
          </button>
        </div>
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
