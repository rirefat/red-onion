import React from 'react';
import './Header.css';
import logo from '../assets/images/logo2.png';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-area">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">
                <a href="/cart"><BsCart3></BsCart3></a>
                <a href="/login">Login</a>
                <a href="/sign-up">Sign up</a>
            </div>
        </div>
    );
};

export default Header;