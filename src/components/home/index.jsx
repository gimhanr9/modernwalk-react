import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CategoryCard from '../common/CategoryCard';

const HomeComponent = () => {
  return (
    <Box>
      <Typography variant='h4'>Flash Sale</Typography>
      <Box mt={2} />

      <Box mt={3} />
      <Typography variant='h4'>Categories</Typography>
      <Box mt={2} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5}>
          <CategoryCard category="Men's Clothing" link='/mens-clothing' />
        </Grid>
        <Grid item xs={12} sm={5}>
          <CategoryCard category="Women's Clothing" link='/womens-clothing' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeComponent;
