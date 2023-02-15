import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { ImLocation } from 'react-icons/im';

const Cart = () => {
    return (
        <div className='cart'>
            <div className="client-info">
                <h2>Edit Delivery Address</h2>
                <form action="">
                    <input type="text" name="client_name" id="client_name" placeholder='Name' />
                    <input type="tel" name="phone_number" id="phone_number" placeholder='Phone Number' />
                    <input type="text" name="address" id="address" placeholder='Delivery Address' />
                    <input type="text" name="delivery_notes" id="delivery_notes" placeholder='Add Delivery Notes' />

                    <button>Save & Continue</button>
                </form>
            </div>
            <div className="order-info">
                <p><span className='location-icon'><ImLocation></ImLocation></span> From <strong>Gulshan Plaza Restaurant - GPR</strong></p>
                <p>Arriving in 20-30 mins</p>
                <p>107 Rd no 8</p>

                <CartItem></CartItem>
                <CartItem></CartItem>

                <div className="order-calculation">
                    <table>
                        <tr>
                            <td>Subtotal: 2 items</td>
                            <td>$ 25.00</td>
                        </tr>
                        <tr>
                            <td>Tax:</td>
                            <td>$5.5</td>
                        </tr>
                        <tr>
                            <td>Delivery Fee:</td>
                            <td>$0.5</td>
                        </tr>
                        <tr>
                            <td>Discount:</td>
                            <td>$5.5</td>
                        </tr>
                        <tr>
                            <td><strong>Total:</strong></td>
                            <td><strong>$25.5</strong></td>
                        </tr>
                    </table>
                </div>
                <div className="term-and-conditions">
                    <input type="checkbox" name="terms" id="terms" />
                    <label for="terms">Agreed the <Link to="/term-and-conditions">Terms & Conditions</Link></label>
                </div>
                <button>Place Order</button>
            </div>
        </div>
    );
};

export default Cart;