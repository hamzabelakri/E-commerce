import {combineReducers} from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

const rootReducer= combineReducers({
    productReducer: productReducer,
    userReducer: userReducer,
    authReducer: authReducer,
})

export default rootReducer;
