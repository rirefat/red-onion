import React from 'react';
import './Product.css';
import { MdAddShoppingCart } from 'react-icons/md';

const Product = (props) => {
    const {product_name,img,price,short_description}=props.product;
    return (
        <div className='single-product'>
            <span className="add-to-cart"><MdAddShoppingCart></MdAddShoppingCart></span>
            <img src={img} alt="Product Image" />
            <h3 className='title'>{product_name}</h3>
            <p>{short_description}</p>
            <h3 className='price'><span>$</span>{price}</h3>
        </div>
    );
};

export default Product;