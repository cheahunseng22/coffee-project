import React, { useState } from 'react';
import SlideImg from '../Slide/Slide';

const Slides = [
  {
    url: 'https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg',
    link: '/Contact',
  },
  {
    url: 'https://assets.vogue.com/photos/66eb2e9886bc092af3de5e89/master/w_2560%2Cc_limit/JUNG-KOOK_IMAGE%2520(2).jpg',
    link: '/Category',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg',
    link: '/Promotion',
  }
];
export const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const PrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
    );
  };

  const NextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>

      {/* Banner with coffee image */}
      <div className="w-full h-64 bg-cover bg-center rounded-lg shadow-md">
        {Slides.length > 0 && (
          <SlideImg image={Slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} PrevSlide={PrevSlide} NextSlide={NextSlide} />
        )}
      </div>
      {/* Product Section */}
      <div className="grid grid-cols-2 gap-4 ">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-gray-800">New Product</h2>
          <p className="text-teal-500 mt-2 hover:underline cursor-pointer">Click Here!</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-gray-800">New Product</h2>
          <p className="text-teal-500 mt-2 hover:underline cursor-pointer">Click Here!</p>
        </div>
      </div>

    </>
  )
}
