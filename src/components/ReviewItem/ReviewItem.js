import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {product,handleRemover}=props;
    const { name, price, img, shipping, quantity } =product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=''></img>
            </div>
            <div className='review-details-container'>
                <div className="review-item-detail">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0,20) +'...':name }
                        </p>
                    <p>price: <span className='orange-color'>${price}</span></p>
                    <p> <small>Shipping:${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-item-container"> 
                    <button onClick={()=>handleRemover(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;