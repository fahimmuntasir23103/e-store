import Hero from "./HomeComponents/Hero/Hero";
import FeaturedProducts from "./HomeComponents/FeaturedProducts/FeaturedProducts";
import Categories from "./HomeComponents/Categories/Categories";
import PrimaryProducts from "../../Components/PrimaryProducts/PrimaryProducts";
import SecondaryProducts from "./HomeComponents/SecondaryProducts/SecondaryProducts";
import DiscountProducts from "./HomeComponents/DiscountProducts/DiscountProducts";
import SalesBanner from "./HomeComponents/SalesBanner/SalesBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <PrimaryProducts />
      {/* <SecondaryProducts /> */}
      <DiscountProducts />
      <SalesBanner />
    </div>
  );
};

export default Home;
