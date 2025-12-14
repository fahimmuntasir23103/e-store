import SecondaryProduct from "../SecondaryProduct/SecondaryProduct";

const SecondaryProducts = () => {
  return (
    <div className="2xl:max-w-[1280px] mx-auto">
      <div className="grid grid-cols-4">
        <SecondaryProduct/>
        <SecondaryProduct/>
        <SecondaryProduct/>
        <SecondaryProduct/>
      </div>
    </div>
  );
};

export default SecondaryProducts;
