import React from 'react';
import Feature from '../../Features/Features';
import HeroSection from '../../HeroSection/HeroSection';
import Products from '../../Products/Products';
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Products></Products>
            <Feature></Feature>
        </div>
    );
};

export default Homepage;