import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import listProducts from './reducers/listProducts';
import cartProducts from './reducers/cartProducts';

const rootReducers = combineReducers({ listProducts, cartProducts });
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
