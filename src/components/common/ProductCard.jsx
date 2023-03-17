import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../utils/Colors';
import PropTypes from 'prop-types';

const StyledProductCard = styled(Card)(({ theme }) => ({
  borderRadius: 14,
}));

const ProductCard = ({ title, image, price, description, category }) => {
  return (
    <StyledProductCard>
      <CardContent>
        <Typography variant='h6' align='center'>
          {title}
        </Typography>
        <Box display='flex' justifyContent='center' mt={2} mb={2}>
          <img src={image} alt='product' height={70} width={50} />
        </Box>
      </CardContent>
      <StyledProductCard
        sx={{
          background: category === "Men's Clothing" ? Colors.green : Colors.red,
        }}
      >
        <Box pl={4} pr={4} pt={2} pb={2}>
          <Typography variant='h5' align='center'>
            Rs {price}
          </Typography>
          <Typography
            variant='body2'
            align='center'
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
            }}
          >
            {description}
          </Typography>
        </Box>
      </StyledProductCard>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default ProductCard;
