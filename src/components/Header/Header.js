import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo2.png';
import { FaUser } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import useFunction from '../../assets/Functions/Functions';

const Header = () => {
    const {navigation}=useFunction();
    return (
        <div className='header'>
            <div className="logo-area">
                <img src={logo} alt="Brand Logo" onClick={()=>{navigation("/")}}/>
            </div>
            <div className="nav-links">
                <Link to='/user'><FaUser></FaUser></Link>
                <Link to='/cart'><BsCart3></BsCart3></Link>
                <Link to='/track-order'>Track Order</Link>
                <Link to='/login'>Login</Link>
                <Link to='/sign-up'>Sign Up</Link>
                {/* <Link to='/sign-up'>Sign Out</Link> */}
            </div>
        </div>
    );
};

export default Header;