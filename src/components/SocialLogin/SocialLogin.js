import React from 'react';
import './SocialLogin.css';

import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='social-login'>
            <div className="top-section">
                <hr />
                <span>OR</span>
                <hr />
            </div>
            <div className="socials">
                <button className='google'><FcGoogle></FcGoogle></button>
                <button className='facebook'><FaFacebookSquare></FaFacebookSquare></button>
                <button className='twitter'><BsTwitter></BsTwitter></button>
            </div>
        </div>
    );
};

export default SocialLogin;