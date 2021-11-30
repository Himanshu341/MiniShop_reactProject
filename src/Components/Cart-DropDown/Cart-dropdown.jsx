import React from 'react';
import './cart-dropdown.style.css';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({cartItems , history , dispatch}) => {
    return(
        <>
            <Paper elevation={3} className="cart-dropdown">
                <h4 className="heading">Cart Items</h4>

                <div className="cart-items">
                    { 
                        cartItems.length ? 
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                        : <span className="empty-message">Your cart is empty</span>
                    }
                </div>
                <Button variant='contained' className='mt-3' onClick={() => 
                    {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }
                }
            >GO TO CHECKOUT</Button>
            </Paper>
        </>
    )
}

const mapStateProps = state => ({
    cartItems:selectCartItems(state)
});

export default withRouter(connect(mapStateProps) (CartDropdown));