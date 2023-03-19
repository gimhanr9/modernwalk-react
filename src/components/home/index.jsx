import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    console.log(products);
    dispatch(fetchFlashSaleProducts());
  }, []);
  return (
    <Box>
      <Typography variant='h4'>Flash Sale</Typography>
      <Box mt={2} />

      {/* <Grid container spacing={3} columns={20} justifyContent='space-between'>
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
      </Grid> */}
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        ))}
      </Carousel>

      <Box mt={3} />
      <Typography variant='h4'>Categories</Typography>
      <Box mt={2} />
      <Grid container spacing={12}>
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
