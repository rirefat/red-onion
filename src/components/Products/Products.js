import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    const navigate = useNavigate();
    const navigateToCart =()=>{
        navigate('/cart');
    }

    return (
        <div className='products-section'>
            <div className="nav-menu">
                <ul>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div>
            <div className="products-container">
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="btn">
                <button onClick={navigateToCart}>Checkout Your Foods</button>
            </div>
        </div>
    );
};

export default Products;