
import React from "react";
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default function SlideImg({ image, currentIndex, PrevSlide, NextSlide }) {


    return (
        //in it check current index have link or not if have link load and can click img slid link to path,
        // if not have link it show img url only.

        <div className="slide-img relative mb-3 ">
            {image[currentIndex]?.link ? (
                <Link to={image[currentIndex].link}>
                    <img  src={image[currentIndex].url} alt="slide" className="w-full h-[40.7vh] object-fill shadow-custom rounded bg-red-700" />
                </Link>
            ) : (
                <img src={image[currentIndex].url} alt="slide" className="w-full h-[300px] object-fill shadow-custom rounded bg-red-700 " />
            )}

            <button id="prev-btn" onClick={PrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-3 text-white bg-main rounded-[50%] text-[12px] hover:text-gray-400  pl-[0.4rem] pr-[0.5rem]">
                <FontAwesomeIcon icon={faLessThan} />
            </button>

            <button id="next-btn" onClick={NextSlide}  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-3 text-white bg-main rounded-[50%] text-[12px] hover:text-gray-400 pl-[0.4rem] pr-1">
                <FontAwesomeIcon icon={faGreaterThan} />
            </button>
        </div>
    );
}
