import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid, Pagination } from '@mui/material';
import ProductCard from './ProductCard';

const CategoryPage = ({ category, products }) => {
  const [paginationCount, setPaginationCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const handleChange = (event, value) => {
    setCurrentPage(value - 1);
  };

  useEffect(() => {
    const chunks = [];
    for (let i = 0; i < products.length; i += 10) {
      const chunk = products.slice(i, i + 10);
      chunks.push(chunk);
    }
    setDisplayedProducts(chunks);
    console.log(products);
    console.log(displayedProducts);
    if (products?.length >= 0) {
      let quotient = 0;
      quotient = Math.floor(products.length / 10);
      let remainder = products.length % 10;
      if (remainder > 0) {
        quotient = quotient + 1;
      }
      setPaginationCount(quotient);
    }
  }, [products]);
  return (
    <Box>
      <Typography variant='h4'>{category}</Typography>
      <Box mt={2} />

      <Grid container spacing={3} columns={20} justifyContent='space-between'>
        {displayedProducts.length > 0 &&
          displayedProducts[currentPage] &&
          displayedProducts[currentPage].map((product, index) => (
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
      <Box display='flex' justifyContent='flex-end' mt={3}>
        <Pagination
          count={paginationCount}
          variant='outlined'
          shape='rounded'
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
};

export default CategoryPage;
