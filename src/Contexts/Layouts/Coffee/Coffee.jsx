import React from 'react';
import NavItems from '../../../Contexts/NavItem/NavItems';
import Ratting5 from '../../../components/UI_element/Star/Ratting5';

const Coffee = () => {
  const products = [
    { id: 1, name: 'Coffee Milk', price: '3.25$', discount: '20%-off', imageUrl: 'https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/CinnamonIcedCoffee_Detail-0005_2022.jpg' },
    { id: 2, name: 'Coffee black', price: '3.25$', discount: '20%-off', imageUrl: 'https://png.pngtree.com/png-clipart/20230731/original/pngtree-black-coffee-with-ice-and-high-ball-glass-png-image_9380914.png' },
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
          {['Coffee'].map((category, index) => (
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
                    <Ratting5/>
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

export default Coffee;
