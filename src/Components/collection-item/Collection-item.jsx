import React from 'react';

import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

import Button from '@material-ui/core/button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './collection-item.style.css';

const CollectionItem = ({ item , addItem }) => {
    const { name , price , imageUrl} = item;
    return(
        <>
            
                <div className="collection-item">

                    <div className="collection-image">
                        <div className="image" style={{
                            backgroundImage : `url(${imageUrl})`
                        }} />
                    </div>

                    <div className="collection-footer">
                        <span className="name">{name}</span>
                        <span className="price">{price}</span>
                    </div>

                    <Button variant='contained'  id='addtocart' onClick= {() => addItem(item)} >
                        <ShoppingCartIcon/>
                    </Button>
                    
                </div>
            
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null , mapDispatchToProps) (CollectionItem);