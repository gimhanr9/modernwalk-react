import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)(({ theme }) => ({}));

const ProductCard = ({ title, image, price, description, category }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>{title}</Typography>
        <Box mt={2} />
        <img src={image} alt='product' height={70} width={50} />
        <Card>
          <Box>
            <Typography variant='h5'>{price}</Typography>
            <Typography variant='body2'>{description}</Typography>
          </Box>
        </Card>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default ProductCard;
