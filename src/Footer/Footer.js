import React from "react";
import './Footer.scss';
import {Link} from 'react-router-dom';


const Footer = () => {



    return ( 
        <article className="footer-container d-flex flex-column justify-content-center align-items-center">
            <section className="footer-links">
                <div className="logo">
                    
                </div>
                <div className="links">
                    <Link to="#">Top recipes</Link>
                    <Link to="#">Others Recipes</Link>
                </div>
                <div className="links">
                    <Link to="/myaccount">My Account</Link>
                    <Link to="/saved">My Saves</Link>
                    <Link to="/myaccount">My Recipes</Link>
                </div>
                <div className="links">
                    <Link to="/about">About Us</Link>
                    <Link to="/about">Contact Us</Link>
                </div>
            </section>
            <section className="contacts d-flex justify-content-center align-items-center">
                <div></div>
                <div>&copy; Matheus 2025 All rights reserved</div>
            </section>
        </article>
     );
}
 
export default Footer;