import PrimaryProduct from "../PrimaryProduct/PrimaryProduct";


const PrimaryProducts = () => {
  return (
    <section className="2xl:max-w-[1280px] lg:max-w-[1120px] mx-auto px-4 space-y-8 mb-14">
      <ul className="flex items-center gap-8 font-medium text-lg">
        <li className="after:bg-black after:h-0.5 after:w-full after:block cursor-pointer">
          New Arrival
        </li>
        <li className="text-[#8B8B8B] cursor-pointer">Best seller</li>
        <li className="text-[#8B8B8B] cursor-pointer">Featured Products</li>
      </ul>
      <div className="grid grid-cols-4 gap-4">
        <PrimaryProduct/>
        <PrimaryProduct/>
        <PrimaryProduct/>
        <PrimaryProduct/>
        <PrimaryProduct/>
        <PrimaryProduct/>
        <PrimaryProduct/>
        <PrimaryProduct/>
      </div>
    </section>
  );
};

export default PrimaryProducts;
