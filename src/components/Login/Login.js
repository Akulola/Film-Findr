import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import avatar from './avatar.png'; 

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="profile-list">
        <Link className="profile-link" to="/movieList">
          <img className="avatar" src={avatar} alt="Avatar" />
          <span>Angela</span>
        </Link>
        <Link className="profile-link" to="/movieList">
          <img className="avatar" src={avatar} alt="Avatar" />
          <span>Ruth</span>
        </Link>
        <Link className="profile-link" to="/movieList">
          <img className="avatar" src={avatar} alt="Avatar" />
          <span>Regan</span>
        </Link>
        <Link className="profile-link" to="/movieList">
          <img className="avatar" src={avatar} alt="Avatar" />
          <span>Ken</span>
        </Link>
        <Link className="profile-link" to="/movieList">
          <img className="avatar" src={avatar} alt="Avatar" />
          <span>Mary</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
