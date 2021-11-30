import Social_data from "../scard-data";
import SHOP_DATA from '../../../redux/Shop-redux/shop.data';

const INITIAL_STATE = {
    Scard_collection : SHOP_DATA
}

const ScardReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default ScardReducer;