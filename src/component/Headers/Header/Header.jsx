import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faShoppingCart, faUser, faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../../../assets/Global.css';
import './ResponsiveNav.css';

export default function Header() {

    const [isSidebar,setIsSidebar] = useState(false);

    const CloseAndHide = () => {
        setIsSidebar(haveOrNot => !haveOrNot);
    };
    const HideNavbar = () => {
        setIsSidebar(false);
    }

    return (
        <div className="header">
            {/* header1 */}
            <div className="headertop bg-white shadow-md flex justify-between items-center max-mddd:hidden">
                <div className="welcome text-center text-xs text-main pl-2 ">
                    <p>Welcome to my restaurant</p>
                </div>
                <div className="acc flex items-center ">
                    <div className=" wrap flex items-center space-x-2">
                        <p id="user" className="text-main">
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} className="text-lg hover:text-blue-500 transition duration-200" />
                            </a>
                        </p>
                        <span id="profile" className="text-xs text-main">My Account</span>
                        <button className="flex items-center bg-main text-white text-xs p-1 rounded-md hover:bg-blue-600 transition duration-200">
                            Choose Language
                            <span id="icon" className="ml-1">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        {/* end header 1 */}
            <div className="headersecond flex justify-between items-center bg-white shadow-md p-1  max-mddd:hidden ">
                {/* Call Section */}
                <div className="call flex items-center space-x-2 text-main">
                    <span id="icon" className="text-xs">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <div className="flex flex-col text-xs">
                        <span id="title" className="font-semibold">Call Us Now</span>
                        <span id="number" className="text-main">+855 123456789</span>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="logo flex items-center justify-center text-main">
                    <span id="mainlogo" className="text-lg">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>

                {/* Cart Section */}
                <div className="cart flex items-center space-x-2 text-main">
                    <span id="logo" className="text-xs">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    <div className="flex flex-col text-xs">
                        <span id="title" className="font-semibold">Shopping Cart</span>
                        <span id="number" className="text-main">Item(0) - 0.00$</span>
                    </div>
                </div>
            </div>
{/* responsive  */}
            <div className="sidebar-head justify-between items-center bg-white shadow-md p-1 max-mddd:flex hidden">
            
              {/* Logo Section */}
              <div className="logo  p-1 object-cover flex items-center justify-center text-main">
                    <span id="mainlogo" className="text-lg">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
                {/* Cart Section */}
                <div className="cart flex items-center  text-main">
                    <span id="logo" className="text-xs space-x-2" >
                        <FontAwesomeIcon icon={faShoppingCart}  />
                        <FontAwesomeIcon icon={faList} onClick={CloseAndHide} className=' cursor-pointer  ' />
                    </span>
                    
                </div>
            </div>
            
            <div className="headerThird bg-main shadow-md p-2 flex justify-between  max-mddd:hidden ">
                {/* Navigation */}
                <div className="nav max-xss:hidden max-xs:hidden max-sm:hidden">
                    <ul className="flex space-x-4 text-white text-xs">
                        <li><Link to="/" className="hover:text-black transition duration-200">Home</Link></li>
                        <li><Link to="/Category" className="hover:text-black transition duration-200">Category</Link></li>
                        <li><Link to="/Promotion" className="hover:text-black transition duration-200">Promotion</Link></li>
                        <li><Link to="/Contact" className="hover:text-black transition duration-200">Contact</Link></li>
                        <li><Link to="/About" className="hover:text-black transition duration-200">About</Link></li>
                    </ul>
                </div>

                <div className="flex items-center max-xss:hidden max-xs:hidden max-sm:hidden ">
                    <input
                        className=" text-white w-[50%] h-[1rem] text-xs font-md px-2 rounded-l-sm focus:outline-none focus:ring-2 focus:main"
                        type="search"
                        name="search"
                        placeholder="Search Products"
                    />
                    <button className="bg-orange-400 text-white h-[1rem] text-xs px-4 rounded-r-sm hover:bg-red-800 transition duration-200">
                        Search
                    </button>
                </div>
                      </div>
                  {isSidebar && (
            <div className="side-bar shadow-md text-center z-20 absolute w-full bg-main bg-opacity-50 backdrop-blur-md trasi ">
                {/* Navigation */}
                
                <div className="nav ">
                    <ul className=" text-white text-xs p-4 space-y-5  ">
                        <li><Link onClick={HideNavbar} to="/" className="hover:text-black transition duration-200">Home</Link></li>
                        <li><Link onClick={HideNavbar} to="/Category" className="hover:text-black transition duration-200">Category</Link></li>
                        <li><Link onClick={HideNavbar} to="/Promotion" className="hover:text-black transition duration-200">Promotion</Link></li>
                        <li><Link onClick={HideNavbar} to="/Contact" className="hover:text-black transition duration-200">Contact</Link></li>
                        <li><Link onClick={HideNavbar} to="/About" className="hover:text-black transition duration-200">About</Link></li>
                    </ul>
                </div>
            </div>
        )}
            <div className="search absolute z-10 top-[2%] right-2 max-mddd:flex hidden">
                 <input
                        className=" text-white w-[50%] h-[1rem] text-[9px] font-md rounded-l-sm focus:outline-none focus:ring-2 focus:main"
                        type="search"
                        name="search"
                        placeholder="Search Products"
                    />
                    <button className="bg-orange-400 text-white h-[1rem] text-[9px] px-2 rounded-r-sm hover:bg-red-800 transition duration-200">
                        Search
                    </button>
             </div>
      </div>
            
       
        
    );
}
