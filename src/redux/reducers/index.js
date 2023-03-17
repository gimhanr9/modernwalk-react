import { combineReducers } from 'redux';
import ProductSlice from './ProductSlice';

const rootReducer = combineReducers({ products: ProductSlice });

export default rootReducer;
