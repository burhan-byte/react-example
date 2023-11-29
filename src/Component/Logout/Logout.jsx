import React, { useState } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function Logout() {
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
    navigate('/login2');
  };
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 1000 , top: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FF99CC' /* Pink color */ }}>
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
            <Link to="/About" className="menu-bars">
              <MenuItem onClick={handleMenuClose}>Menu From</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h8" align="center" component="div" sx={{ flexGrow: 1, color: '#fff' /* White color */ }}>
            LIS INSTRUMENTS MAINTENANCE REPORT FORM
          </Typography>
          
          <Button color="inherit" onClick={logout} variant="h7">
          
          Log Out
          
            
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




// import react, { useState } from "react";
// import { Box, IconButton, Menu, MenuItem } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import { Link } from "react-router-dom";

// const Bar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* search  */}
//       <Box display="flex" borderRadius="3px" backgroundColor="#F5EFE7">
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* icons */}
//       <Box display="flex">
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <PersonOutlinedIcon onClick={handleMenu} />
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <Link to="/Side" className="menu-bars">
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//             </Link>
//             <Link to="/666" className="menu-bars">
//               <MenuItem onClick={handleClose}>My account</MenuItem>
//             </Link>
//           </Menu>
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };
