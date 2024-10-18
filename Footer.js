import React from 'react';
import './style.css';  // Make sure this is the correct path to your CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo & Address */}
        <div className="footer-section">
          <h3 className="footer-logo">
            <i className="fas fa-leaf"></i> AGROPULSE
          </h3>
          <p><strong>Address:</strong> <br />
            Mohan Cooperative Industrial Estate,<br />
            Hyderabad, Telangana, India
          </p>
          <p><strong>CIN:</strong> 182930435653</p>

          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* General Links */}
        <div className="footer-section">
          <h4>General</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Market Prices</a></li>
            <li><a href="#">Insights</a></li>
          </ul>
        </div>

        {/* Policies Links */}
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund & Cancellation</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="copyright">
        © Copyright 2024, Indian Agribusiness Systems Ltd. (IASL).<br />
        All Rights Reserved. Venture incubated by Indian Agribusiness Systems Ltd.
      </div>
    </footer>
  );
};

export default Footer;
