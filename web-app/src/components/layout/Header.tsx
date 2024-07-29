import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          style={{ width: '70px' }}
          src='https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/636fecb23e9741026fee1b94_fuul-logo-color.png' />
      </Toolbar>
    </AppBar>
  );
};

export default Header;