import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(props.children);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        console.log(product)
        total = total + product.price;
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items :{cart.length}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:{tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            {props.children}
            <div className='btn-grp'>
                <button>Cear Cart</button>
               
            </div>
        </div>
    );
};

export default Cart;