import {combineReducers} from 'redux';
import authReducer from './authReducer';
import shoppingCartReducer from './shoppingCartReducer';
import bookmarkReducer from './bookmarkReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth:authReducer,
  cart: shoppingCartReducer,
  bookmark:bookmarkReducer,
  user:userReducer
});