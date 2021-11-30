import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './Shop-redux/shop.reducer';
import CategoryReducer from './Category/category.reducer';
import SliderReducer from './slider/slider.reducer';
import todolistReducer from '../Demo/ToDo_List/todo-redux/todolist.reducer';
import ScardReducer from '../Demo/Social-card/Scard-redux/Scard.reducer';
export default combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    category: CategoryReducer,
    slider:SliderReducer,
    todolist:todolistReducer,
    socialCard: ScardReducer
});