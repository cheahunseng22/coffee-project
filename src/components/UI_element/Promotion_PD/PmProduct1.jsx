import React from 'react'

export const PromotionProduct1 = () => {
  return (
    <div className="bg-teal-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1471922597728-92f81bfe2445?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D.jpg"
            alt="Coffee Hot"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-2">
            <h3 className="text-white text-xl font-bold">Milk Coffee</h3>
            <p className="text-white text-sm mb-2">Available</p>
          </div>
        </div>
  )
}
