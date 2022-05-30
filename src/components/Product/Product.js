import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart}=props
    const {img,name,price,seller,ratings}=product;
    return (
        <div className='product'>
           <img src={img} alt="" />
         <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>ratings:{ratings}stars</small></p>
         </div>
        <button onClick={()=>handleAddToCart(product)} className='btn'>
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;