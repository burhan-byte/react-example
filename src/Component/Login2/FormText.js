// FormText.js

// Import necessary libraries and components
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Login.css';

// Define the FormText component
const FormText = () => {
  // Define state variables for username, password, and their respective errors and colors
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [userNameColor, setUserNameColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');

  // Define the form validation function
  const validateForm = (e) => {
    e.preventDefault();

    // Validate username
    if (userName.length > 8) {
      setErrorUserName('');
      setUserNameColor('green');
    } else {
      setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร');
      setUserNameColor('red');
    }

    // Validate password
    if (password.length > 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร');
      setPasswordColor('red');
    }
  };

  // Render the form component
  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Hi, Welcome to BPL PATHOLOGIST</h2>
        <h2>Enter your credentials to continue</h2>
        {/* Username input field */}
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        {/* Password input field */}
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        {/* Submit button */}
        <Button type="submit" variant="contained" color="primary">
          SIGN IN
        </Button>
      </form>
    </div>
  );
};

// Export the FormText component
export default FormText;
