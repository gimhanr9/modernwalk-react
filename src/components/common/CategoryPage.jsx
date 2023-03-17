import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const CategoryPage = ({ category, products }) => {
  return (
    <Box>
      <Typography variant='h4'>{category}</Typography>
      <Box mt={2} />
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={category}
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
