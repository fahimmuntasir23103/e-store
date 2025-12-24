import Breadcrumb from "./ShopComponents/BreadCrumb/BreadCrumb";
import Sidebar from "./ShopComponents/Sidebar/Sidebar";
import ProductSection from "./ShopComponents/ProductsSection/ProductsSection";
import { dataContext } from "../../Context/Context";
import { useContext, useState } from "react";

const Shop = () => {
  const data = useContext(dataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleFilter = (e) => {
    const { name, value, checked } = e.target;

    if (name.toLowerCase() === "categories") {
      if (checked) {
        const filter = data.products.filter(
          (product) => product.category.toLowerCase() === value.toLowerCase()
        );
        setFilteredProducts([...filteredProducts, ...filter]);
      } else {
        const filter = filteredProducts.filter(
          (singleCategory) =>
            singleCategory.category.toLowerCase() !== value.toLowerCase()
        );
        setFilteredProducts(filter);
      }
    }
  };

  const baseProducts = filteredProducts.length > 0 ? filteredProducts : data.products;

  const handleRatingFilter = (e) => {
    const value = e.target.value;
    
    const productsCopy = [...baseProducts];

    if (value === "rating") {
      const sortedProducts = productsCopy.sort(
        (productOne, productTwo) => 
          productTwo.reviews.average_rating - productOne.reviews.average_rating
      );
      setFilteredProducts(sortedProducts);
    } else if (value === "low") {
      const sortedProducts = productsCopy.sort(
        (productOne, productTwo) => 
          parseFloat(productOne.pricing.current_price) - parseFloat(productTwo.pricing.current_price)
      );
      setFilteredProducts(sortedProducts);
    } else if (value === "high") {
      const sortedProducts = productsCopy.sort(
        (productOne, productTwo) => 
          parseFloat(productTwo.pricing.current_price) - parseFloat(productOne.pricing.current_price)
      );
      setFilteredProducts(sortedProducts);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <Sidebar
          handleFilter={handleFilter}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          brands={data.brands}
          categories={data.categories}
        />

        <div className="flex-1">
          <ProductSection products={baseProducts} handleRatingFilter={handleRatingFilter} />
        </div>
      </div>
    </div>
  );
};

export default Shop;