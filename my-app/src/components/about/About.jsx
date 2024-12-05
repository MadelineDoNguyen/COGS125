import React from 'react';
import "./about.css";
import Me from "../../assets/Me.jpg";
import Resume from "../../assets/Resume.pdf"

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="me__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am pursuing a Bachelor of Science in Cognitive Science at UC San Diego, specializing in Design & Interaction. I aim to blend artistry with technology to deliver captivating and functional products with seamless user experience. I manage social media for my family's business and express my creativity through nail designs. In my free time, I enjoy cooking with my partner and exploring new cuisines.</p>
            <a href={Resume} className="btn">Download Resume</a>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default About