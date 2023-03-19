import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import { Colors } from '../../utils/Colors';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          height: '100%',

          background: Colors.background,
        }}
      >
        <Box pl={8} pt={2} pr={7} pb={9} className='main-content'>
          {props.children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
