import React from 'react';
import './Signup.css';
import logo from '../../assets/images/logo.png'

const Signup = () => {
    return (
        <div className='signup-area'>
            <div className="logo-area">
                <img src={logo} alt="" />
            </div>
            <form action="" className='form-area'>
                <input type="email" name="" id="" placeholder='Your email'/>
                <input type="password" name="" id="" placeholder='Your Password'/>
                <input type="button" value="LOGIN" />
            </form>
        </div>
    );
};

export default Signup;