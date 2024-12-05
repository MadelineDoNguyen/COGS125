import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Let's Connect</h2>

      <div className="contact__icons">
        <a 
          href="https://www.linkedin.com/in/madeline-n" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact__icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a 
          href="mailto:mdn010@ucsd.edu" 
          className="contact__icon"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact