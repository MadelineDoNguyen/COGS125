import React from 'react';
import "./experience.css";
import Code from "../../assets/code-solid.svg";
import Design from "../../assets/object-group-solid.svg";
import Research from "../../assets/magnifying-glass-solid.svg";

const data = [
  {
    id: 1,
    image: Design, 
    title: "UI Designer",
    description: "Figma, Wireframing, Lo-Fi & Hi-Fi Prototyping"
  },
  {
    id: 2,
    image: Code,
    title: "Front End Developer",
    description: "HTML, CSS, Javascript, React JS, Bootstrap"
  },
  {
    id: 3,
    image: Research,
    title: "UX Researcher",
    description: "Interview Conductor, Survey Design, Data Analysis"
  }
];

const Experience = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Experience</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <ul className="services__description">{description}</ul>
            </div>
          );
        })}
        
      </div>

    </section>
  )
}

export default Experience