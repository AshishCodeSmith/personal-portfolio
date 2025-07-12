import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import newProfile from '../../assets/new_profile.jpg.jpg.jpg';

const About = () => {
  return (
    <div  id ='about'className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={newProfile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate frontend developer from Bokaro, India, with a
              strong foundation in building modern, responsive, and accessible
              web applications. I specialize in technologies like React.js,
              JavaScript, HTML, CSS, and Tailwind CSS. I enjoy turning complex
              problems into simple, beautiful, and intuitive user interfaces
              that enhance user experience.
            </p>
            <p>
              As a fresher, I'm eager to contribute to real-world projects and
              continuously learn from experienced teams. I'm highly motivated,
              quick to adapt, and always ready to explore new technologies. My
              goal is to join a forward-thinking organization where I can grow
              as a developer, collaborate effectively, and build products that
              make a real impact.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
                <p>
                 HTML & CSS   
                </p>
                <hr style ={{width:"50%"}}/>
            </div>
            <div className="about-skill">
                <p>
                 React JS  
                </p>
                <hr style ={{width:"60%"}}/>
            </div>
            <div className="about-skill">
                <p>
                JavaScript
                </p>
                <hr style ={{width:"70%"}}/>
            </div>
            <div className="about-skill">
                <p>
           Next JS  
                </p>
                <hr style ={{width:"50%"}}/>
            </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>
                10+
                <p>
              Projects Completed
                </p>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
