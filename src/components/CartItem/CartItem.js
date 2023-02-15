import React from 'react';
import './CartItem.css';

import img from '../../assets/images/breakfast/breakfast_id_2.png'

const CartItem = () => {
    return (
        <div className='cart-item'>
            <div className="item-info">
                <img src={img} alt="" />
                <div>
                    <p>Butter Naan</p>
                    <p className="price">$2.5</p>
                    <span className='note'>Delivery Free</span>
                </div>
            </div>

            <div className="quantity">
                <span>-</span>
                <span>02</span>
                <span>+</span>
            </div>
        </div>
    );
};

export default CartItem;