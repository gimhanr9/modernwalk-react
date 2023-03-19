import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../redux/reducers/ProductSlice';
import CategoryPage from '../common/CategoryPage';

const WomensClothingComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts("women's clothing"));
  }, []);
  return (
    <div>
      <CategoryPage category="Women's Clothing" products={products} />
    </div>
  );
};

export default WomensClothingComponent;
