import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { TextField,Box ,Menu, MenuItem} from '@mui/material';
// import axios from 'axios';
import { Grid,Typography } from '@mui/material';



export default function Sing() {
  
  
    return (
      <Grid container justifyContent="center" mt={20} >
          <Grid item xs={12} md={6} lg={15} style={{ position: 'relative' }}>
          <img
      src="https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="A beautiful landscape"
      style={{
        width: '120%',
        height: '1023px', 
        objectFit: 'cover',
        borderRadius: '2px',
        cursor: 'pointer',
        
        
      }}
    />

          
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center',fontFamily: 'cursive' }}>
            <Typography variant="h5" gutterBottom>
              Hi, Welcome
            </Typography>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', justifyContent: 'center' , fontFamily: 'cursive'}}></div>
            <Typography variant="h6" gutterBottom>
              Hi, Welcome back. Enter your credentials to continue
            </Typography>
          </div>
        </Grid>
    </Grid>
    );
}




