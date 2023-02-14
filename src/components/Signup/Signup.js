import React from 'react';
import './Signup.css';
import logo from '../../assets/images/logo2.png'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup-area'>
            <div className="logo-area">
                <img src={logo} alt="" />
            </div>
            <form action="" className='form-area'>
                <input type="text" name="" id="" placeholder='Your Name' />
                <input type="email" name="" id="" placeholder='Your email' />
                <input type="password" name="" id="" placeholder='Your Password' />
                <input type="password" name="" id="" placeholder='Confirm Password' />
                <input type="button" value="SIGN UP" className='btn' />                
            </form>
            <span>Already have account? <Link to='/login'>Login</Link></span>
        </div>
    );
};

export default Signup;