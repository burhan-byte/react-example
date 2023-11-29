import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, KeyboardControlKeyOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#fff', // Set your desired background color
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
}));


const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF6666', 
  color: '#fff',
  '&:hover': {
    backgroundColor: '#FFCCFF',
  },
  marginTop: theme.spacing(2), 
}));


const FormText = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = () => {
    if (username === 'Nurda' && password === '1234') {
      console.log('Nurda');
      localStorage.setItem('token', 1);
      navigate('/Sing');
    } else {
      console.log('fail');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundColor: '#E6E6FA' }}>
      <Grid item xs={12} md={6} lg={5}>
        <StyledPaper>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
  Hi, Welcome to BPL PATHOLOGIST
</Typography>
<Typography variant="subtitle1" gutterBottom style={{ color: '#555' }}>
  Enter your credentials to continue
</Typography>

          <form>
            <StyledTextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errorUserName !== ''}
              helperText={errorUserName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errorPassword !== ''}
              helperText={errorPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledButton variant="contained" fullWidth onClick={handleLogin}>
              Log in
            </StyledButton>
          </form>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <img
  src="https://www.salika.co/wp-content/uploads/2019/10/medical-tool-way-to-medical-hub-thailand-1.jpg"
  alt="A beautiful landscape"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  }}
/>

        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Hi, Welcome
        </Typography>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
          Hi, Welcome back. To Logins Medical
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FormText;
