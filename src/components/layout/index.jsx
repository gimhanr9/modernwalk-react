import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Box ml={8} mt={6} mr={7} className='main-content'>
        {props.children}
      </Box>
    </React.Fragment>
  );
};

export default Layout;
