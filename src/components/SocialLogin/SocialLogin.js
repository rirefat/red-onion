import React, { useState } from 'react';
import './SocialLogin.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import app from '../../firebase.init';

const SocialLogin = () => {
    const [user, setUser] = useState({});

    const auth = getAuth(app);

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <div className='social-login'>
            <div className="top-section">
                <hr />
                <span>OR</span>
                <hr />
            </div>
            <div className="socials">
                <button className='google' onClick={googleSignIn}><FcGoogle></FcGoogle></button>
                <button className='facebook'><FaFacebookSquare></FaFacebookSquare></button>
                <button className='twitter'><BsTwitter></BsTwitter></button>
            </div>
        </div>
    );
};

export default SocialLogin;