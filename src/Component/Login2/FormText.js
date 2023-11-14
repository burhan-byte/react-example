import './Login.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

const FormText = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [userNameColor, setUserNameColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');

  const validateForm = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName('');
      setUserNameColor('green');
    } else {
      setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร');
      setUserNameColor('red');
    }

    if (password.length > 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร');
      setPasswordColor('red');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Hi, Welcome to BPL PATHOLOGIST</h2>
        <h2>Enter your crddentials to continue</h2>
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
        <Button type="submit" variant="contained" color="primary">
          SIGN IN
        </Button>
      </form>
    </div>
  );
};

export default FormText;