import React, { useState } from 'react';
import './Login.css';

const BPLPathologistLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // ตรวจสอบข้อมูลผู้ใช้ (ในตัวอย่างนี้ให้ username เป็น "user" และ password เป็น "password")
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="container">
      {loggedIn ? (
        <div>
          <p>Hi, Welcome to BPL PATHOLOGIST, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="form">
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default BPLPathologistLogin;