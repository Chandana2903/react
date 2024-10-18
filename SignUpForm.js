import React from 'react';
import './up.css';

const SignUp = () => {
  return (
    <div className="container">
      <div className="signin-signup">
        <div className="signin">
          <h2>Welcome Back!</h2>
          <p>Enter your details to use all of site features</p>
          <button className="sign-btn">SIGN IN</button>
        </div>

        <div className="signup">
          <h2>Create Account</h2>
          <div className="social-container">
            <button className="social-btn">G+</button>
            <button className="social-btn">f</button>
            <button className="social-btn">G</button>
            <button className="social-btn">in</button>
          </div>
          <p>or use your email for registration</p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="sign-btn">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
