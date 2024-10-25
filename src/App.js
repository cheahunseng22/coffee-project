import Header from "./component/Headers/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./component/NavLink/Category/Category";
import Promotion from "./component/NavLink/Promotion/Promotion";
import React from "react";
import Contact from "./component/NavLink/Contact/Contact";
import About from "./component/NavLink/About/About";
import Coffee from "./Contexts/Layouts/Coffee/Coffee";
import Tea from "./Contexts/Layouts/Tea/Tea";




export default function App() {
  return (
    <>

        <div>
          <Header />
          
        </div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/Tea" element={<Tea />} />
          
         
      
        </Routes>
        <div>
         
     
        </div>
       
        
    
    </>
  )
}