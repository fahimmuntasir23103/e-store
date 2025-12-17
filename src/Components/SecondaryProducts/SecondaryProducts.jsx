import SecondaryProduct from "../SecondaryProduct/SecondaryProduct";

const SecondaryProducts = () => {
  return (
    <div className="2xl:max-w-[1280px] mx-auto">
      <div className="grid grid-cols-4">
        <SecondaryProduct bgColor="#FFFFFF"/>
        <SecondaryProduct bgColor="#F9F9F9"/>
        <SecondaryProduct bgColor="#EAEAEA"/>
        <SecondaryProduct bgColor="#2C2C2C"/>
      </div>
    </div>
  );
};

export default SecondaryProducts;
