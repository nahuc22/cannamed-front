import { combineReducers } from 'redux';
import  authReducer  from './authReducer.js';
import productReducer from './productReducer.js';
import cartReducer from './cartReducer.js';
import { paymentReducer } from './payReducer.js';
import { orderReducer } from './orderReducer.js';

const rootReducer = combineReducers({
    auth: authReducer, 
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    pay: paymentReducer
});

export default rootReducer;