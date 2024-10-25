import React from 'react'
import Ratting1 from '../Star/Ratting1'


export const FeatureCard = () => {
  return (
    <>
    
    {/* Product Cards */}
    {Array(8).fill('').map((_, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg" alt="coffee" className="w-full h-32 object-cover mb-4 rounded-lg" />
            <h3 className="font-bold text-lg text-gray-800">Coffee Hot</h3>
            <p className="text-teal-500 text-sm mt-1">1.25$ -20% 2$</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">Rating:</span>
              <div className="flex space-x-1">
                <Ratting1/>
              </div>
            </div>
          </div>
        ))}
    
    </>
  )
}
