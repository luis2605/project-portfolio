import React, { useState } from "react";
import classes from "./header.module.css";
import logo from "../../assets/images/logo.webp";
import german from "../../assets/images/german.webp";
import english from "../../assets/images/english.webp";
import navLinksEn from "../../data/navLinksEn";
import navLinksDe from "../../data/navLinksDe";

const Header = ({ onGermanSelected, onSetGermanSelectedHandler }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [navLinks, setNavLinks] = useState(navLinksEn);
  //toggle Menu//
  const showMenuHandler = () => {
    setShowMenu((prev) => !showMenu);
  };
  //change languaje//

  const changeLanguaje = () => {
    console.log(onGermanSelected);
    if (onGermanSelected === false) {
      setNavLinks(navLinksDe);
    } else setNavLinks(navLinksEn);
    return onSetGermanSelectedHandler(!onGermanSelected);
  };
  // render languaje conditionally

  const renderLinks = navLinks.map((link, index) => {
    return (
      <li key={index} className={classes.nav__item}>
        <a
          href={link.href}
          className={`${classes.nav__link} ${classes["active-link"]}`}
        >
          {link.name}

          <span className={classes["icons-links"]}>{link.icon}</span>
        </a>
      </li>
    );
  });

  return (
    <header className={classes.header}>
      <nav className={`container ${classes.nav}`}>
        <a href="index.html" className={classes["nav__logo"]}>
          <img src={logo} className={classes.logo} alt="cuban coder" />
        </a>
        <img
          className={classes["lang-icon"]}
          src={onGermanSelected ? english : german}
          onClick={changeLanguaje}
          alt="lang-flag"
        />
        <div
          className={
            showMenu
              ? `${classes["show-menu"]} ${classes.nav__menu}`
              : classes.nav__menu
          }
        >
          <ul className={`grid ${classes.nav__list}`}>{renderLinks}</ul>
          <i
            className={`uil uil-times ${classes.nav__close}`}
            onClick={showMenuHandler}
          ></i>
        </div>
        <div className={classes.nav__toggle}>
          <i className={`uil uil-apps `} onClick={showMenuHandler}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
