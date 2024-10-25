import React from 'react';
import { PromotionProduct1 } from '../../../components/UI_element/Promotion_PD/PmProduct1';
import { PromotionProduct2 } from '../../../components/UI_element/Promotion_PD/PmProduct2';
import { PromotionProduct3 } from '../../../components/UI_element/Promotion_PD/PmProduct3';
import { PromotionProduct4 } from '../../../components/UI_element/Promotion_PD/PmProduct4';


const Promotion = () => {
  return (
    <div className="container mx-auto p-4 ">
      {/* Promotion Banner */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8">
        <img
          src="https://splashcoffeeco.com/cdn/shop/files/Product-BeansSpill_1440x640_crop_center.jpg?v=1626048561.jpg"
          alt="Promotion Banner"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Discount 50% for any product, Click Here!
          </h1>
        </div>
      </div>

      {/* Product  */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">Off-50% Discount</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-5">
        {/* product 1 */}
        <PromotionProduct1/>
         {/* product 2 */}
         <PromotionProduct2/>
          {/* product 3 */}
          <PromotionProduct3/>
           {/* product 4 */}
         <PromotionProduct4/>
         
       
      </div>
    </div>
  );
};

export default Promotion;
