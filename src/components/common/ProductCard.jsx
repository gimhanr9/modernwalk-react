import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../utils/Colors';
import PropTypes from 'prop-types';

const StyledProductCard = styled(Card)(({ theme }) => ({
  borderRadius: 14,
  maxWidth: 230,
  boxShadow: '2px 2px 5px -2px #888',
}));

const ProductCard = ({ title, image, price, description, category }) => {
  return (
    <StyledProductCard>
      <CardContent>
        <Box sx={{ minHeight: 55 }}>
          <Typography
            variant='h6'
            align='center'
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
          <img src={image} alt='product' height={73} width={65} />
        </Box>
      </CardContent>

      <StyledProductCard
        sx={{
          background:
            category === "men's clothing" ? Colors.green : Colors.pink,
        }}
      >
        <Box pl={4} pr={4} pt={1} sx={{ minHeight: 98 }}>
          <Typography variant='h5' align='center' sx={{ color: Colors.blue }}>
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
