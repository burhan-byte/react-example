// // FormText.js

// // Import necessary libraries and components
// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import './Login.css';

// // Define the FormText component
// const FormText = () => {
//   // Define state variables for username, password, and their respective errors and colors
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorUserName, setErrorUserName] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');
//   const [userNameColor, setUserNameColor] = useState('');
//   const [passwordColor, setPasswordColor] = useState('');

//   // Define the form validation function
//   const validateForm = (e) => {
//     e.preventDefault();

//     // Validate username
//     if (userName.length > 8) {
//       setErrorUserName('');
//       setUserNameColor('green');
//     } else {
//       setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร');
//       setUserNameColor('red');
//     }

//     // Validate password
//     if (password.length > 8) {
//       setErrorPassword('');
//       setPasswordColor('green');
//     } else {
//       setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร');
//       setPasswordColor('red');
//     }
//   };

//   // Render the form component
//   return (
//     <div className="container">
//       <form className="form" onSubmit={validateForm}>
//         <h2>Hi, Welcome to BPL PATHOLOGIST</h2>
//         <h2>Enter your credentials to continue</h2>
//         {/* Username input field */}
//         <div className="form-control">
//           <label>Username</label>
//           <input
//             type="text"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             style={{ borderColor: userNameColor }}
//           />
//           <small style={{ color: userNameColor }}>{errorUserName}</small>
//         </div>
//         {/* Password input field */}
//         <div className="form-control">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ borderColor: passwordColor }}
//           />
//           <small style={{ color: passwordColor }}>{errorPassword}</small>
//         </div>
        
//         {/* Submit button */}
//         <Button type="submit" variant="contained" color="primary">
//           SIGN IN
//         </Button>
//       </form>
//     </div>
//   );
// };

// // Export the FormText component
// export default FormText;

import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle,} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FormText = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

// console.log(username);
// console.log(password);
if(username==="test" && password==="test"){
console.log("test")
localStorage.setItem('token',1)
navigate("/home")
}else{
console.log("fail")
}
    // // Handle login logic here
    // console.log('Logging in with:', username, password);
    // // Optionally, you can include the following to clear the form after login
    // setUsername('');
    // setPassword('');

    // // Validate username
    // if (username.length > 8) {
    //   setErrorUserName('');
    // } else {
    //   setErrorUserName('Enter a username with more than 8 characters');
    // }

    // // Validate password
    // if (password.length > 10) {
    //   setErrorPassword('');
    // } else {
    //   setErrorPassword('Enter a password with more than 10 characters');
    // }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} md={6} lg={5}>
        <Paper
          sx={{
            padding: 2,
            textAlign: 'center',
            backgroundColor: '#ffff',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Hi, Welcome to BPL PATHOLOGIST
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Enter your credentials to continue
          </Typography>
          <form>
            <TextField
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
            <TextField
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
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={{ backgroundColor: 'purple' }}>
              Log in
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        {/* Content for the second column goes here */}
        <img
          src= "https://www.eeci.or.th/wp-content/uploads/2021/07/09-Medical-Devices_1.png"
          alt="A beautiful landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Hi, Welcome
        </Typography>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
          Hi, Welcome back. Enter your credentials to continue
        </Typography>
      </Grid>

    </Grid>
  );
};

export default FormText;
