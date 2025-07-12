import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import github_sign from "../../assets/github_sign_in.png";
import linkedin_icon from "../../assets/linkedin.png";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);


    formData.append("access_key", "6ad5b4d4-016f-40a7-9470-d1428327e91a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        event.target.reset();
      } else {
        alert("❌ Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
       
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            As a fresher, I’m continuously learning and improving through
            real-world projects, contributing to open-source, and staying
            updated with the latest trends in frontend development. My goal is
            to work with forward-thinking teams where I can contribute
            meaningfully, grow my skills, and help bring creative ideas to life
            through code.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <a href="mailto:sinhaashish813@gmail.com">
                sinhaashish813@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <a href="tel:+919263487024">+91 9263487024</a>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <a
                href="https://www.google.com/maps?q=Bokaro+Steel+City,+Jharkhand,+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bokaro Steel City, Jharkhand, INDIA
              </a>
            </div>
          </div>

          <div className="contact-socials">
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
        </div>

        
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
