import React, { useState } from 'react';
import './Signup.css';
import logo from '../../assets/images/logo2.png'
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import useFunction from '../../assets/Functions/Functions';


import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase.init';

const Signup = () => {
    const { navigation } = useFunction();
    const [user, setUser] = useState({});
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailSignIn = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className='signup-area'>
            <div className="logo-area">
                <img src={logo} onClick={() => navigation("/")} />
            </div>
            <form onSubmit={emailSignIn} className='form-area'>
                <input required type="text" name="" id="name" placeholder='Your Name' />
                <input required type="email" name="" id="email" placeholder='Your email' />
                <input required type="password" name="" id="password" placeholder='Your Password' />
                <input required type="password" name="" id="confirm_password" placeholder='Confirm Password' />
                <input type="submit" value="SIGNUP" className='btn' />
            </form>
            <span>Already have an account? <Link to='/login'>Please Login</Link></span>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;