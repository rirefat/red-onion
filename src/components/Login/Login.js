import React from 'react';
import './Login.css'
import logo from '../../assets/images/logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import useFunction from '../../assets/Functions/Functions';

const Login = () => {
    const {navigation}=useFunction();

    const emailLogin =(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;

        console.log(email, password,);
    }

    return (
        <div className='login-area'>
            <div className="logo-area">
                <img src={logo} onClick={()=>navigation("/")} />
            </div>
            <form onClick={emailLogin} className='form-area'>
                <input required type="email" name="email" id="email" placeholder='Your email' />
                <input required type="password" name="password" id="password" placeholder='Your Password' />    
                <input type="submit" value="LOGIN" className='btn'/>          
            </form>
            <span>New Here? <Link to='/sign-up'>Register Now</Link></span>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;