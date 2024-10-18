import React from 'react';
; // Add styles for the feature section

const AgricultureInsight = () => {
  return (
    <section id="agriculture-insight" className="agriculture-insight-section">
      <h2 className="section-title">
        A Platform Where <span>Insight Meets Growth</span>
      </h2>

      <div className="features-container">
        <div className="feature-box">
          <div className="feature-icon icon-pricing">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="feature-title">Track Market Price Trends Daily</h3>
          <p className="feature-text">
            Get exclusive access to daily and long-term agri commodity price trends.
          </p>
          <button className="feature-button">View Spot Pricing</button>
        </div>

        <div className="feature-box">
          <div className="feature-icon icon-reports">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3 className="feature-title">Get In-Depth Market Reports</h3>
          <p className="feature-text">
            Receive detailed daily, weekly, and monthly price trends with expert analysis.
          </p>
          <button className="feature-button">View Reports</button>
        </div>

        <div className="feature-box">
          <div className="feature-icon icon-insights">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="feature-title">Discover Industry Insights</h3>
          <p className="feature-text">
            Get insights on prices, arrivals, and trader sentiments in over 200 spot markets in India every day.
          </p>
          <button className="feature-button">View Insights</button>
        </div>

        <div className="feature-box">
          <div className="feature-icon icon-expert">
            <i className="fas fa-comments"></i>
          </div>
          <h3 className="feature-title">Consult An Expert</h3>
          <p className="feature-text">
            Connect with our experts for deeper trend analysis and personalized insights.
          </p>
          <button className="feature-button">Subscribe Now</button>
        </div>
      </div>

      <div className="sign-in-section" style={{ textAlign: 'center' }}>
        <a href="signin.html">
          <button className="sign-in-button">Sign In</button>
        </a>
      </div>
    </section>
  );
};

export default Features;
