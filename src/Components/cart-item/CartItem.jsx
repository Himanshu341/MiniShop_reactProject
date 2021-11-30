import React from 'react';
import './cartitem.style.css';

const CartItem = ({item : {imageUrl , name , price , quantity}}) => (
    
        <>
            <div className="cart-item">
                <img src={imageUrl} alt="item" />
                <div className="item-details">
                    <span id="name">{name}</span>
                    <br></br>
                    <span id="price"> {quantity} x ${price} </span>
                </div>
            </div>
        </>

)

export default CartItem;