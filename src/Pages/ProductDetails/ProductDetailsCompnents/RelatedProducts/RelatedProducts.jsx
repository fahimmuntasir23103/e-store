import PrimaryProduct from "./../../../../Components/PrimaryProduct/PrimaryProduct";

import { useContext } from "react";
import { dataContext } from "../../../../Context/Context";

const RelatedProducts = ({category, brand, id}) => {
  const {products} = useContext(dataContext)
  const relatedProducts = products.filter(product => product.id !== id && product.brand == brand && product.category == category)
  console.log("Related:- ",relatedProducts)
  return (
    <div className="mb-8 bg-white p-8">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          relatedProducts.map(relatedProduct => <PrimaryProduct key={relatedProduct.id} product={relatedProduct}/>)
        }
      </div>
    </div>
  );
};

export default RelatedProducts 