import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const CategoryPage = ({ category, products }) => {
  return (
    <Box>
      <Typography variant='h4'>{category}</Typography>
      <Box mt={2} />
      <Grid container>
        {products.map((product, index) => (
          <Grid item>
            <ProductCard />
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
