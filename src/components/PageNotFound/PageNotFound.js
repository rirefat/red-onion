import React from 'react';
import './PageNotFound.css'
import img from '../../assets/images/pageNotFound.png';
import useFunction from '../../assets/Functions/Functions';

const PageNotFound = () => {
    const{navigation}= useFunction()
    return (
        <div className='page-not-found'>
            <img src={img} alt="" />
            <h1>The page you're looking for is not available.</h1>
            <button onClick={()=>{navigation("/")}}>Return Homepage</button>
        </div>
    );
};

export default PageNotFound;