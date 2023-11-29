import React, { useState } from 'react';
import { Box, Menu, MenuItem, Typography, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
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
    
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%',top:0, zIndex: 1000 }}>
      <AppBar position="static" sx={{ backgroundColor: '#e91e63' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <Link to="/side" className="menu-bars" style={{ textDecoration: 'none', color: '#FF3333' }}>
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  fontSize: '1rem',
                  paddingY: '1rem',
                  fontWeight: 'bold',
                  fontFamily: 'cursive', 
                }}
              >
                <AssignmentIcon sx={{ marginRight: 1 }} />
                Lis Form
              </MenuItem>
            </Link>
            <Link to="/sine" className="menu-bars" style={{ textDecoration: 'none', color: '#009688' }}>
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  fontSize: '1rem',
                  paddingY: '1rem',
                  fontWeight: 'bold',
                  fontFamily: 'cursive', 
                }}
              >
                <InfoIcon sx={{ marginRight: 1 }} />
                Table
              </MenuItem>
            </Link>
          </Menu>
          <Typography
            variant="h8"
            align="center"
            component="div"
            sx={{
              flexGrow: 1,
              color: '#fff',
              textDecoration: 'none',
              fontFamily: 'cursive', 
            }}
          >
            LIS INSTRUMENTS MAINTENANCE REPORT FORM
          </Typography>
          <Button color="inherit" onClick={logout} variant="outlined">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
