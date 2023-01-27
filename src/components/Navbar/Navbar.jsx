import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../tunisia.png';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="tunisian flag" />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          &nbsp;&nbsp;Tunisie
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
