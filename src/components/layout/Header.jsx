import React from 'react';
import { AppBar, Toolbar, Box, Typography, Divider, Link } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            component={ReactLink}
            to='/'
            variant='h3'
            align='center'
            sx={{
              textDecoration: 'none',
            }}
          >
            Modern Walk
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
};

export default Header;
