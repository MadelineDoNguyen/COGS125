import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/MN-Logo.svg";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="MN_Logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
              <i className="fa-solid fa-house"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="fa-solid fa-address-card"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="fa-solid fa-file"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>


       <div className="nav__footer">
        <span className="copyright">&copy; 2024. </span>
       </div>
    </aside>
  )
}

export default Sidebar