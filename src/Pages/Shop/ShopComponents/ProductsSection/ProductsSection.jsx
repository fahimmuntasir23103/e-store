import PrimaryProduct from "../../../../Components/PrimaryProduct/PrimaryProduct";

const ProductSection = ({products, handleRatingFilter}) => {
  // console.log(products)
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold">
          Selected Products: <span className="font-bold">{products.length}</span>
        </h2>

        <select onChange={handleRatingFilter} className="px-4 py-2 border rounded-md text-sm">
          <option value="rating">By rating</option>
          <option value="low">By price: Low to High</option>
          <option value="high">By price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => <PrimaryProduct key={idx} product={product} />)}
      </div>
    </div>
  );
};

export default ProductSection;
