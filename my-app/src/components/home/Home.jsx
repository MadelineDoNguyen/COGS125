import React from 'react';
import "./home.css";
import Me from "../../assets/Me.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Madeline Nguyen</h1>
        <span className="home__education">Hello there, I am a UI/UX designer!</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire me</a>

        <ScrollDown />

      </div>
    </section>
  )
}

export default Home