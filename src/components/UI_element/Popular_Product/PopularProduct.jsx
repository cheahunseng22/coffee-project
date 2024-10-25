import React from 'react'

export const PopularProduct = () => {
    return (
        <>
            <div className="bg-teal-600 p-3 rounded-lg shadow-lg">
                <h2 className="text-white font-bold mb-4">Popular Product</h2>

                <ul className="space-y-4">
                    {/* Product 1 */}
                    <a href="#" className="flex items-center space-x-4 hover:bg-teal-700 p-2 rounded-lg transition-all">
                        <img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg" alt="Coffee & Tea Milk" className="w-12 h-12 object-cover rounded-full" />
                        <li className="text-white">Coffee & Tea Milk $10.00</li>
                    </a>

                    {/* Product 2 */}
                    <a href="#" className="flex items-center space-x-4 hover:bg-teal-700 p-2 rounded-lg transition-all">
                        <img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg" alt="Coffee & Tea Milk" className="w-12 h-12 object-cover rounded-full" />
                        <li className="text-white">Coffee & Tea Milk $10.00</li>
                    </a>

                    {/* Product 3 */}
                    <a href="#" className="flex items-center space-x-4 hover:bg-teal-700 p-2 rounded-lg transition-all">
                        <img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg" alt="Coffee & Tea Milk" className="w-12 h-12 object-cover rounded-full" />
                        <li className="text-white">Coffee & Tea Milk $10.00</li>
                    </a>

                    {/* All New Product Link */}
                    <a href="#" className="text-white hover:underline block text-center font-semibold mt-2">
                        All New Product
                    </a>
                </ul>
            </div>

        </>
    )
}
