import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png'
import useFunction from '../../assets/Functions/Functions';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    const {navigation}=useFunction();
    return (
        <div className='footer'>
            <div className="section-one">
                <div className="logo-section">
                    <img src={logo} onClick={()=>navigation("/")}/>
                </div>
                <div className="essential-links">
                    <ul>
                        <li><a href="#">About Online Food</a></li>
                        <li><a href="#">Read Our Blog</a></li>
                        <li><a href="#">Sign Up To Deliver</a></li>
                        <li><a href="#">Add Your Restaurant</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Get Help</a></li>
                        <li><a href="#">Read FAQ's</a></li>
                        <li><a href="#">View All Cities</a></li>
                        <li><a href="#">Restaurants Near Me</a></li>
                    </ul>
                </div>
            </div>

            <div className="section-two">
                <div className="copyright">                    
                    <p>Copyright © 2020-{year} | Red Onion Foods</p>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Product Pricing</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;