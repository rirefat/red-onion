import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product_name,img,price,short_description}=props.product;
    return (
        <div className='single-product'>
            <img src={img} alt="Product Image" />
            <h3>{product_name}</h3>
            <p>{short_description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Product;