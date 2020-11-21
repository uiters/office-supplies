import {combineReducers} from 'redux';
import authReducer from './authReducer';
import shoppingCartReducer from './shoppingCartReducer';
import bookmarkReducer from './bookmarkReducer';

export default combineReducers({
  auth:authReducer,
  cart: shoppingCartReducer,
  bookmark:bookmarkReducer
});