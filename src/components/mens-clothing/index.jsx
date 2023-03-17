import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '../../redux/reducers/ProductSlice';
import CategoryPage from '../common/CategoryPage';

const MensClothingComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts("men's clothing"));
  }, []);
  return (
    <div>
      <CategoryPage category="Men's Clothing" products={products} />
    </div>
  );
};

export default MensClothingComponent;
