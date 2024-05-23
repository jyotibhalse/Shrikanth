import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import Dashboard  from "../Header/Dashboard";
import './login.css';

export default function Login(){
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Logged in with email: ${email}`);
  };
    return(
        <>
        <Dashboard/>
        <div className="main-head">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
    </div>
    <button type="submit">Login</button>
  </form>

<div className="not-Account">
    <span>if you have not account
      <b><Link to="/signup" className="nav-link">Signup</Link></b>
      </span>
  </div>
</div>
        </>
    );
};