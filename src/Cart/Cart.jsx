import React , {createContext, useReducer} from 'react';
import products from './Cart_data';
import ContextCart from './ContextCart';
import {reducer} from './reducer';




export const CartContext = createContext();

const initState = {
    item : products,
    totalAmount : 0 ,
    totalItem : 0,
};

function Cart(){

    const [state , dispatch] = useReducer(reducer , initState);


    // To delete the individual remove item from the cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    return(
        
            <>  
                <CartContext.Provider value={{...state , removeItem}}>
                    <ContextCart />
                </CartContext.Provider>
            </>
    )
}
    
export default Cart;

