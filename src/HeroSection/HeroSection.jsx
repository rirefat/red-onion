import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1>Best food waiting for your belly</h1>
            <div className="search-section">
                <input type="search" name="" id="search_field" placeholder='Search food item'/>
                <input type="button" value="SEARCH" id="search_btn"/>
            </div>
        </div>
    );
};

export default HeroSection;