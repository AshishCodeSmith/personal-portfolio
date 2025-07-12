import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import github_sign from "../../assets/github_sign_in.png"; // ✅ No spaces!
import linkedin_icon from "../../assets/linkedin.png";     // ✅ Correct

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Logo" />
          <p>I am a fresher frontend developer from India.</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Ashish Sinha. All rights reserved
        </p>

        <div className="footer-bottom-right">
          <a href="#terms">Terms of Services</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>

          {/* Social Icons */}
          <a
            href="https://github.com/AshishCodeSmith"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={github_sign} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-sinha-890a4b247"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={linkedin_icon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>

        <div className="subscribe-container">
          <h3>Stay Updated</h3>
          <div className="subscribe-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
