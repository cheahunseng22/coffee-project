import React from 'react';
import NavItems from '../../../Contexts/NavItem/NavItems';
import Ratting2 from '../../../components/UI_element/Star/Ratting2';

const Category = () => {
  const products = [
    { id: 1, name: 'sting', price: '1.25$', discount: '20%-off', rating: 4, imageUrl: 'https://cdn.zeptonow.com/production///tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/abfb4912-a354-41de-ad0a-7768a97242a7.jpeg' },
    { id: 2, name: 'coca', price: '1.25$', discount: '20%-off', rating: 4, imageUrl: 'https://t4.ftcdn.net/jpg/03/14/09/15/360_F_314091588_geYFNvOlBI5CdSPE0eozepxepiekb9l7.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 pr-4">
          <div className="bg-teal-100 p-4 rounded-lg">
            <ul>
              <NavItems/>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-3/4">
          {['Category'].map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold mb-4 bg-pink-200 p-2 rounded-lg text-center">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold">{product.name}</span>
                      <span className="text-sm text-gray-500">{product.price}</span>
                    </div>
                    <div className="text-sm text-red-500">{product.discount}</div>
                    {/* Rating */}
                    <div className="flex items-center mt-2">
                     <Ratting2/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
