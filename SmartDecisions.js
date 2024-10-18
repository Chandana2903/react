import React from 'react';
 // Add styles for Smart Decisions section
 import './style.css';

const SmartDecisions = () => {
  return (
    <section className="smart-decisions-section">
      <div className="smart-decisions-container">
        <h2>Enabling Businesses to <span>Make Smart Decisions</span></h2>
        <div className="smart-decisions-content">
          <div className="smart-decisions-item">
            <h3>01</h3>
            <h4>Credible Data, Sources, and Reports</h4>
            <p>We collect, verify, analyze, and aggregate data from trustworthy sources daily.</p>
          </div>
          <div className="smart-decisions-item">
            <h3>02</h3>
            <h4>Expert Analysis, News, and People</h4>
            <p>Our experts conduct deep analysis based on decades of experience.</p>
          </div>
          <div className="smart-decisions-item">
            <h3>03</h3>
            <h4>Dependable Information, Service, and Platform</h4>
            <p>We provide timely, accurate insights to help make critical business decisions.</p>
          </div>
        </div>
        <a href="#" className="start-trial-btn">Start Free Trial</a>
      </div>
    </section>
  );
};

export default SmartDecisions;
