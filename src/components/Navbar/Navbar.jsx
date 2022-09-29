import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {FiMenu} from "react-icons/fi";
import {GrClose} from "react-icons/gr";

import "./navbar.css"


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <section className="navbar">
        <div className="logo">
          Scandi<span>web</span>
      </div>
        <ul className={isMobile ? "nav__links-mobile": "nav__links"}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/carts"><li>Cart</li></Link>
          <Link to="/products"><li>Product</li></Link>
          <Link to="/sign-up"><li>Sign Up</li></Link>
        </ul>
        <button className="mobile__menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? <GrClose/> : <FiMenu/>}
        </button>
    </section>
  )
}

export default Navbar