import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1">Welcome to Our Website</Typography>
        <Typography variant="body1">Explore our services and products.</Typography>
        {/* Add more content here */}
      </Grid>
      <Grid item xs={6}>
        {/* Content for left side */}
        <Button variant="contained" color="primary">Explore Services</Button>
      </Grid>
      <Grid item xs={6}>
        {/* Content for right side */}
        <Button variant="contained" color="secondary">View Products</Button>
      </Grid>
    </Grid>
  );
}

export default Home;
