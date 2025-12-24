import React, { useContext } from "react";
import PrimaryProduct from "../../../../Components/PrimaryProduct/PrimaryProduct";
import { dataContext } from "../../../../Context/Context";

const DiscountProducts = () => {
  const { products } = useContext(dataContext);
  return (
    <section className="2xl:max-w-[1280px] lg:max-w-[1120px] px-4 py-20 mx-auto">
      <h2 className="font-medium text-2xl mb-8">Discounts up to -50%</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.slice(0,4).map((product) => (
          <PrimaryProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DiscountProducts;
