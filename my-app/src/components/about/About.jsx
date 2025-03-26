import React from 'react';
import "./about.css";
import Me from "../../assets/Me.jpg";
import Resume from "../../assets/Resume2025.pdf"

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="me__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am a rising senior studying Cognitive Science at UC San Diego, specializing in Design & Interaction. I am driven by the challenge of combining artistry with technology to create products that feel both beautiful and intuitive. Outside of education, I keep my family’s business connected and thriving by managing its social media presence, a role that lets me experiment with fresh visuals and authentic storytelling. I also channel my creativity into designing intricate nail art—my own miniature canvases—and find relaxation and adventure in trying new restaurants, where I can explore new flavors from around the world.</p>
            <a href={Resume} className="btn">Download Resume</a>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default About