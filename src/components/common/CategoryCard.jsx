import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ReactLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Colors } from '../../utils/Colors';

const StyledCategoryCard = styled(Card)(({ theme }) => ({
  borderRadius: 18,
  boxShadow: '4px 4px 9px -2px #888',
  '& .MuiCardContent-root': {
    padding: theme.spacing(12),
  },
}));

const CategoryCard = ({ category, link }) => {
  return (
    <StyledCategoryCard
      sx={{
        background: category === "Men's Clothing" ? Colors.green : Colors.pink,
      }}
    >
      <CardActionArea component={ReactLink} to={link}>
        <CardContent>
          <Typography variant='h3' align='center' sx={{ color: Colors.white }}>
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCategoryCard>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string,
  link: PropTypes.string,
};

export default CategoryCard;
