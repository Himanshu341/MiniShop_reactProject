import React ,{useContext} from 'react';
import {CartContext} from './Cart';
import CartItems from './Cartadd';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Style from '../index.module.css'


const ContextCart = () => {

     const {item} = useContext(CartContext);
    return (
        <> 
            <div className={Style.cart_container}>
                
                <header>
                    <div className="continue-shopping">
                        <ArrowBackIcon className="arrow-icon" />
                        <h3>Continue Shopping</h3>
                    </div>
                    <div className="cart-icon">
                        <ShoppingCartIcon />
                    </div>
                </header>

                <section className="main-cart-section">
                    <h1>Section Cart</h1>
                    <p className="total-items">You have <span className="total-items-count"> 7 </span>items in shopping cart</p>

                    <div className="cart-items">
                        <div className="cart-items-container">
                            {
                                item.map((curItem) => {
                                    return(<CartItems key={curItem.id} {...curItem}/>);
                                })
                            }

                        </div>
                    </div>
                    <div className="card-total">
                        <h3>Cart Total : <span>2200rs</span></h3>
                        <button>checkout</button>
                        <button className="clear-cart ">Clear cart</button>

                    </div>
                </section>
            </div>

        </>
    );
}

export default ContextCart;