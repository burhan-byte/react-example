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
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';

const FormText = () => {
  const spacing = 2; // Assuming you have defined spacing
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
    // Optionally, you can include the following to clear the form after login
    setUsername('');
    setPassword('');
  };

  return (
    <Grid container spacing={spacing} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper
          sx={{
            padding: 2,
            textAlign: 'center',
            backgroundColor: '#ffff',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Hi, Welcome to BPL PATHOLOGIST
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
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        {/* Content for the second column goes here */}
      </Grid>
    </Grid>
  );
};

export default FormText;
