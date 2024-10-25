import React from 'react'

export const Cat = () => {
    return (
        <>
            <div className="bg-teal-600 p-4 rounded-lg shadow-lg">
                <h2 className="text-white font-bold mb-2">Category</h2>
                <ul className="space-y-2">
                    <a href="#"><li className="text-white hover:underline">+ Coffee</li></a>
                    <a href="#"> <li className="text-white hover:underline">+ Tea</li></a>
                </ul>
            </div>
        </>
    )
}
