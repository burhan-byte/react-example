import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Sing() {
  return (
    <Grid container justifyContent="center" mt={20} style={{ height: '200vh' }}>
      <Grid item xs={12} md={6} lg={15} style={{ position: 'relative' }}>
        <img
          src="https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Description"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Hi, Welcome
          </Typography>
          <Typography variant="h6" gutterBottom>
            Hi, Welcome back. Enter your credentials to continue
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}


