import React from 'react';
import './contact.css'; // Component-specific styles
import './style.css';

function ContactForm() {
  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="shape.png" className="square" alt="decorative" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">We’d love to hear from you!</h3>
          <p className="text">
            Whether you have a question, feedback, or need support, we’re here to help.
            Please fill out the form below, and our team will get back to you as soon as possible.
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt icon"></i>
              <p>Gachibowli, Hyderabad, Telangana, India</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope icon"></i>
              <p>Agripulse@gmail.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone icon"></i>
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
             <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" required />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" required />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" required />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" required></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
