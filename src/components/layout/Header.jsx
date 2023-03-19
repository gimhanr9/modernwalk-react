import React from 'react';
import { AppBar, Toolbar, Typography, Divider, Grid } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';
import { Colors } from '../../utils/Colors';

const Header = () => {
  return (
    <div>
      <AppBar
        position='static'
        elevation={0}
        sx={{ background: Colors.background }}
      >
        <Toolbar disableGutters>
          <Grid container display='flex' justifyContent='center'>
            <Grid item>
              <Typography
                component={ReactLink}
                to='/'
                variant='h3'
                align='center'
                sx={{
                  textDecoration: 'none',
                  color: Colors.black,
                }}
              >
                Modern Walk
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider sx={{ borderBottomWidth: 4 }} />
    </div>
  );
};

export default Header;
