import React , {useContext}  from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from './Cart';


const CartItems = ({id ,img , description , title , price }) => {
     
    const {removeItem} = useContext(CartContext);
    return(
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                    <AddIcon className="plus"/>
                        <input type="text" placeholder='2' />
                    <RemoveIcon className="add"/>
                </div>

                <div className="price">
                    <h3>{price}</h3>
                </div>

                <div className="remove-item">
                    <DeleteIcon className="remove" onClick={() => removeItem(id)} />
                </div>
            </div>
            <hr/>
        </>
    );
}

export default CartItems;