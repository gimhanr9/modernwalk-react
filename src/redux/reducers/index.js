import { combineReducers } from 'redux';
import HomeSlice from './HomeSlice';
import ProductSlice from './ProductSlice';

const rootReducer = combineReducers({
  products: ProductSlice,
  home: HomeSlice,
});

export default rootReducer;
