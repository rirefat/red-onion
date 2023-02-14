import React from 'react';
import './TracOrder.css';
import map from '../../assets/images/google-map.png';
import rider from '../../assets/images/rider.png';
import helmet from '../../assets/images/helmet.png';

const TracOrder = () => {
    return (
        <div className='track-order'>
            <div className="google-map">
                <img src={map} alt="" />
            </div>
            <div className="riders-info">
                <img src={rider} alt="" />
                <div className="location">
                    <div className="side-bar"></div>
                    <div>
                        <div className='your-location'>
                            <h3>Your location</h3>
                            <p>107 Rd no 5</p>
                        </div>
                        <div className='shop-location'>
                            <h3>Shop location</h3>
                            <p>Gulshan Plaza Restaurant</p>
                        </div>
                    </div>
                </div>

                <div className="time">
                    <h3>10:45</h3>
                    <p>Estimated Delivery Time</p>
                </div>

                <div className="delivery-partner">
                    <img src={helmet} alt="" />
                    <div className="name">
                        <h3>Hamim</h3>
                        <p>Red Onion Delivery Man</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TracOrder;