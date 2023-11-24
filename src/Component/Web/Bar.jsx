import React, { useState } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function Bar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    // Assuming you want to redirect to the login page on logout
    // Adjust the path as needed
    navigate('/');
  };
 

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <Link to="/Side" className="menu-bars">
                <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
              </Link>
              <Link to="/666" className="menu-bars">
                <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
              </Link>
              {/* <Link to="/" className="menu-bars">
                <MenuItem onClick={handleMenuClose}>Item 3</MenuItem>
              </Link> */}
            </Menu>
            <Typography variant="h9" align="center" component="div" sx={{ flexGrow: 1 }}>
              LIS INSTRUMENTS MAINTENANCE REPORT FORM
            </Typography>
            <Button color="inherit" onClick={logout}>
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
