import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <div className="client-info">
                <h2>Edit Delivery Address</h2>
                <form action="">
                    <input type="text" name="client_name" id="client_name" placeholder='Name'/>
                    <input type="tel" name="phone_number" id="phone_number" placeholder='Phone Number'/>
                    <input type="text" name="address" id="address" placeholder='Delivery Address'/>
                    <input type="text" name="delivery_notes" id="delivery_notes" placeholder='Add Delivery Notes'/>

                    <button>Save & Continue</button>
                </form>
            </div>
            <div className="order-info">
                <h2>Order Info</h2>
            </div>
        </div>
    );
};

export default Cart;