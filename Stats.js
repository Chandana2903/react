import React from 'react';
import './style.css';
// Add styles for stats section

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <i className="fas fa-seedling stat-icon"></i>
        <div className="stat-number">3K+</div>
        <div className="stat-text">Commodities Tracked</div>
      </div>

      <div className="stat-box">
        <i className="fas fa-file-contract stat-icon"></i>
        <div className="stat-number">10K+</div>
        <div className="stat-text">Expert Reports</div>
      </div>

      <div className="stat-box">
        <i className="fas fa-globe stat-icon"></i>
        <div className="stat-number">500+</div>
        <div className="stat-text">Global Markets Tracked</div>
      </div>

      <div className="stat-box">
        <i className="fas fa-trophy stat-icon"></i>
        <div className="stat-number">5Y+</div>
        <div className="stat-text">Years of Excellence</div>
      </div>
    </div>
  );
};

export default Stats;
