import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';




export default function Ratting4({rate}){
        const stars = [1,2,3,4,5];
        

    return(
        <>
        
        <div className="flex pl-6 m-1 text-main">
            {stars.map((star)=>(
                <span key={star}>
                       <FontAwesomeIcon icon={star<=4?solidStar : regularStar} />
                </span>
            ))}
        </div>
        
        </>
    )
}