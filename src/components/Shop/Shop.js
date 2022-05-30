import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [pageCount,setPageCount]=useState(0);
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(10);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page,size])

    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res=>res.json())
        .then(data=>{
           const count=data.count; 
           const pages=Math.ceil(count/10);
           setPageCount(pages);
        })
    },[])

    useEffect(()=>{
        console.log('stored cart')
        const storedCart = getStoredCart();
        const savedCart =[];
        for(const id in storedCart){
        const addedProduct =products.find(product =>product._id === id);
        if(addedProduct){
            const quantity =storedCart[id];
           addedProduct.quantity=quantity; 
           savedCart.push(addedProduct);
        }
       
    }
    setCart(savedCart);
    console.log('local storage finished')
    },[products])
    const[cart,setCart]=useState([]);
    const handleAddToCart=(product)=>{
        // console.log(cart)
        const newCart= [...cart,product];
        console.log(newCart)
        setCart(newCart);
        addToDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product =><Product key={product._id} 
                product={product} handleAddToCart={handleAddToCart}>
                </Product>)
            }
            </div>
           
            <div className="cart-container">
           <Cart cart={cart}>
               <Link to='/orders'>
                   <button>Review Order</button>
               </Link>
           </Cart>
            </div>
            <div className='btn-page'>
            {
              [...Array(pageCount).keys()].map(number=><button
              className={page=== number ? 'selected': ''}
                onClick={()=>setPage(number)}
              >{number+1}</button> )  
            }
            <select onChange={e=>setSize(e.target.value)}>
                <option value="10" selected>10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="20">30</option>
            </select>
            </div>
        </div>
    );
};

export default Shop;