import React from 'react';
import './Login.css'
import logo from '../../assets/images/logo2.png'
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='login-area'>
            <div className="logo-area">
                <img src={logo} alt="" />
            </div>
            <form action="" className='form-area'>
                <input type="email" name="" id="" placeholder='Your email' />
                <input type="password" name="" id="" placeholder='Your Password' />
                <input type="button" value="LOGIN" className='btn' />                
            </form>
            <span>New Here? <Link to='/sign-up'>Register Now</Link></span>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;