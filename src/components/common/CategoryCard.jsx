import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ReactLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledCategoryCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  '& .MuiCardContent-root': {
    padding: theme.spacing(12),
  },
}));

const CategoryCard = ({ category, link }) => {
  return (
    <StyledCategoryCard>
      <CardActionArea component={ReactLink} to={link}>
        <CardContent>
          <Typography variant='h3' align='center'>
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCategoryCard>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string,
};

export default CategoryCard;
