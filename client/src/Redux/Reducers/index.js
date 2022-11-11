import {combineReducers} from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer'

const rootReducer= combineReducers({
    productReducer: productReducer,
    userReducer: userReducer,
})

export default rootReducer;
