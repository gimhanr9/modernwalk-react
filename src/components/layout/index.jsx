import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import { Colors } from '../../utils/Colors';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Box sx={{ height: '100vh', background: Colors.background }}>
        <Box pl={8} pt={4} pr={7} className='main-content'>
          {props.children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
