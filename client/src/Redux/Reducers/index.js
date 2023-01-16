import {combineReducers} from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import cartReducer from './cartReducer';

const rootReducer= combineReducers({
    productReducer: productReducer,
    userReducer: userReducer,
    authReducer: authReducer,
    messageReducer: messageReducer,
    cartReducer:cartReducer,
})

export default rootReducer;
