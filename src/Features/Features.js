import React from 'react';
import './Features.css';
import img1 from '../assets/images/feature1.png';
import img2 from '../assets/images/feature2.png';
import img3 from '../assets/images/feature3.png';

import icon1 from '../assets/images/icons/Group 204.png';
import icon2 from '../assets/images/icons/Group 1133.png';
import icon3 from '../assets/images/icons/Group 245.png';

const Feature = () => {
    return (
        <div className='features'>
            <h2>Why you choose us</h2>
            <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surroundings.</p>

            <div className="feature-card">
                <div className="single-card">
                    <img src={img1} alt="" />
                    <div className="description">
                        <img src={icon1} alt="" />
                        <div className="content">
                            <h3>Fast Delivery</h3>
                            <p>Keep your system in sync with automated web hook based notifications each time link is paid and how we deram about our future.</p>

                            <a href="#">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;