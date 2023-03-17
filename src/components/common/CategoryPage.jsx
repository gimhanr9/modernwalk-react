import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const CategoryPage = ({ category, products }) => {
  return (
    <Box>
      <Typography variant='h4'>{category}</Typography>
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
    </Box>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
};

export default CategoryPage;
