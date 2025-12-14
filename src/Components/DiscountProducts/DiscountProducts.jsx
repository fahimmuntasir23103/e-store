import React from 'react';
import PrimaryProduct from '../PrimaryProduct/PrimaryProduct';

const DiscountProducts = () => {
    return (
        <section className='2xl:max-w-[1280px] lg:max-w-[1120px] px-4 py-20 mx-auto'>
        <h2 className='font-medium text-2xl mb-8'>Discounts up to -50%</h2>
        <div className='grid grid-cols-4 gap-4'>
            <PrimaryProduct/>
            <PrimaryProduct/>
            <PrimaryProduct/>
            <PrimaryProduct/>
        </div>
        </section>
    );
};

export default DiscountProducts;