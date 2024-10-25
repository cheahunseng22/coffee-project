import React from 'react';
import NavItems from '../../../Contexts/NavItem/NavItems';
import Ratting3 from '../../../components/UI_element/Star/Ratting3';

const Tea = () => {
  const products = [
    { id: 1, name: 'milk green tea', price: '1.25', discount: '20%', rating: 4, imageUrl: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-ice-green-tea-milk-in-a-glass-isolated-png-image_13148956.png' },
    { id: 2, name: 'lemond tea', price: '1.25', discount: '20%', rating: 4, imageUrl: 'https://leelalicious.com/wp-content/uploads/2016/04/Thai-Lemon-Iced-Tea.jpg' },
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
          {['Tea'].map((category, index) => (
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
                     <Ratting3/>
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

export default Tea;
