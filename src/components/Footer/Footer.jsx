import React from 'react'
import {Link} from "react-router-dom";

import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";

import "./footer.css"
const Footer = () => {
  return (
    <section className="footer">
        <div className="footer__wrapper">
            <div className="footer__links">
                <div className="footer__link">
                    <h3 className="title">Quick Links</h3>
                    <ul className="quick__links">
                        <Link to="/">Home</Link>
                        <Link to="/">Products</Link>
                        <Link to="/">Carts</Link>
                        <Link to="/">Signup</Link>
                    </ul>
                </div>
                <div className="footer__link">
                    <h3 className="title">Contacts</h3>
                        <p>Email:   scandiweb@gmail.com</p>
                        <p>Phone:   +17 999999</p>
                        <p>website:scandiweb.webdeveloper.org</p>
                </div>
                <div className="footer__link">
                    <h3 className="title">Follow us</h3>
                    <ul className="social__links">
                        <Link to="/"><FaFacebookF/></Link>
                        <Link to="/"><BsInstagram/></Link>
                        <Link to="/"><FaTelegramPlane/></Link>
                    </ul>
                    <form action="#">
                        <input type="text" placeholder="Enter Your Email"/>
                        <button className="footer__btn">Subscribe</button>
                    </form>
                    
                </div>
            </div>
            <p className="copyright">Website developed by scandiweb candidate, copyright ©2022 </p>
        </div>
    </section>
  )
}

export default Footer