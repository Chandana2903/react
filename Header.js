import React from 'react';
import './style.css'; // Assuming you're linking a CSS file for this component

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">Agriculture Insights</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#features">Features</a>
          </li>
          <li className="navbar-item">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="navbar-auth">
          <a href="/login" className="auth-button">Login</a>
          <a href="/signup" className="auth-button signup">Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

