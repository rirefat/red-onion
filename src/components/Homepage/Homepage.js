import React from 'react';
import Feature from '../../components/Features/Features';
import HeroSection from '../../components/HeroSection/HeroSection';
import Products from '../../components/Products/Products';
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