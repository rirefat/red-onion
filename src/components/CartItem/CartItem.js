import React from 'react';
import './CartItem.css';
import { BiMinus,BiPlus } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
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
                <span className='icon'><BiMinus></BiMinus></span>
                <span className='quantity_number'>02</span>
                <span className='icon'><BiPlus></BiPlus></span>
            </div>
            <span className='remove-item'><ImCross></ImCross></span>
        </div>
    );
};

export default CartItem;