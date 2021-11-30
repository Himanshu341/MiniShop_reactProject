import React from 'react';
import './checkout-item.style.css';

import { connect } from 'react-redux';
import { clearItemFromCart , addItem ,removeItem } from '../..//redux/cart/cart.action';

const CheckOutItem = ({cartItem , clearItem , addItem ,removeItem}) => {
    const {name , imageUrl , price , quantity} = cartItem;
    return(
        <>
            <div className="checkout-item">
                <div className="image-container">
                    <img src={imageUrl} alt="item" />
                </div>
                <span className="name">{name}</span>
                <span id='Quantity' className="quantity">
                    <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
                <span id='Price' className="price">{price}</span>
                <div className="remove-buttton " onClick={() => clearItem(cartItem)}>
                    &#10005;
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
}); 

export default connect(null ,mapDispatchToProps)(CheckOutItem);