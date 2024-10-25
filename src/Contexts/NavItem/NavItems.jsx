import React from "react";
import { Link } from "react-router-dom";
import '../../assets/Global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function NavItems() {
    return (
        <>

            <div className="nav w-[20%] " >
                <ul>
                    <li className="text-lg font-bold ">
                        <Link to='/Category' className="" >
                            <p className="flex text-xs items-center mt-1 text-main">
                            <FontAwesomeIcon icon={faHome} className="p-1 mr-1 bg-main text-[6px] text-center text-white rounded-[45%] " />
                                Category
                            </p>
                        </Link>
                    </li>
                    <li className="nav-cat"><Link to='/Coffee'>Coffee</Link></li>
                    <li className="nav-cat"><Link to='/Tea'>Tea</Link></li>
                </ul>
            </div>

        </>
    )
}