import Hero from '../../Components/Hero/Hero';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Categories from '../../Components/Categories/Categories';
import PrimaryProducts from '../../Components/PrimaryProducts/PrimaryProducts';
import SecondaryProducts from '../../Components/SecondaryProducts/SecondaryProducts';
import DiscountProducts from '../../Components/DiscountProducts/DiscountProducts';
import SalesBanner from '../../Components/SalesBanner/SalesBanner';

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedProducts/>
            <Categories/>
            <PrimaryProducts/>
            <SecondaryProducts/>
            <DiscountProducts/>
            <SalesBanner/>
        </div>
    );
};

export default Home;