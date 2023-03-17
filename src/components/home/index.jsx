import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFlashSaleProducts,
  selectAllHomeProducts,
} from '../../redux/reducers/HomeSlice';
import CategoryCard from '../common/CategoryCard';
import ProductCard from '../common/ProductCard';

const HomeComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllHomeProducts);

  useEffect(() => {
    console.log(products);
    dispatch(fetchFlashSaleProducts());
  }, []);
  return (
    <Box>
      <Typography variant='h4'>Flash Sale</Typography>
      <Box mt={4} />
      <Grid container spacing={3} columns={20} justifyContent='space-between'>
        {products.map((product, index) => (
          <Grid item key={index} xs={20} sm={6} md={4}>
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={3} />
      <Typography variant='h4'>Categories</Typography>
      <Box mt={4} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <CategoryCard category="Men's Clothing" link='/mens-clothing' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategoryCard category="Women's Clothing" link='/womens-clothing' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeComponent;
