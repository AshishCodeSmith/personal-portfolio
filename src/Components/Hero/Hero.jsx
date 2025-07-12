import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="Profile" />
      <h1>
        <span>"I'm Ashish Sinha,</span> frontend developer based in India"
      </h1>
      <p>
        Hi, I'm a Frontend Developer from Bokaro, India. As a passionate
        fresher, I specialize in building responsive and accessible web
        interfaces using React.js, Tailwind CSS, and JavaScript. I’m actively
        looking for full-time opportunities in tech where I can grow and
        contribute.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset="80" href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
