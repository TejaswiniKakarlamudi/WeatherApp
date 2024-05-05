import React from 'react';

import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import SearchBox from './SearchBox';

const transparentBg = {
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: 'none',
    textShadow: '0 0 3px white',
  };


  
function Header({ onSearch }) {
  return (
    
    <AppBar position="static" sx={transparentBg}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            <Grid item xs={6} sm={6} md={4}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Weather App
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <SearchBox onSearch={onSearch} />
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    
  );
}

export default Header;

