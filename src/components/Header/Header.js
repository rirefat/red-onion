import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo2.png';
import { FaUser } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    
    const navigate = useNavigate();
    const navigateToHome =()=>{
        navigate('/');
    }
    return (
        <div className='header'>
            <div className="logo-area">
                <img src={logo} alt="Brand Logo" onClick={navigateToHome}/>
            </div>
            <div className="nav-links">
                <Link to='/user'><FaUser></FaUser></Link>
                <Link to='/cart'><BsCart3></BsCart3></Link>
                <Link to='/login'>Login</Link>
                <Link to='/sign-up'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;