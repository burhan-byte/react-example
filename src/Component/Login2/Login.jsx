import React from 'react';
import './Login.css'; // เพิ่มการ import CSS ที่คุณได้เขียนไว้

export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form">
        <div className="form-control">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

