import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={`container ${classes.nav}`}>
        <a href="index.html" className={classes["nav__logo"]}>
          Rondon
        </a>
        <div className={classes.nav__menu}>
          <ul className={`grid ${classes.nav__list}`}>
            <li className={classes.nav__item}>
              <a href="#home" className={classes.nav__link}>
                <i className={`uil uil-estate ${classes.nav__icon}`}>Home</i>
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="#about" className={classes.nav__link}>
                <i className={`uil uil-user ${classes.nav__icon}`}>About</i>
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="#skills" className={classes.nav__link}>
                <i className={`uil uil-file-alt ${classes.nav__icon}`}>
                  Skills
                </i>
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="#services" className={classes.nav__link}>
                <i className={`uil uil-briefcase-alt ${classes.nav__icon}`}>
                  Services
                </i>
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="#portfolio" className={classes.nav__link}>
                <i className={`uil uil-scenery ${classes.nav__icon}`}>
                  Portfolio
                </i>
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="#contact" className={classes.nav__link}>
                <i className={`uil uil-message ${classes.nav__icon}`}>
                  Contact Me
                </i>
              </a>
            </li>
          </ul>
          <i className={`uil uil-times ${classes.nav__close}`}></i>
        </div>
        <div className={classes.nav__toggle}>
          <i className={`uil uil-apps `}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
