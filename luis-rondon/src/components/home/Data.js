import React from "react";
import classes from "./home.module.css";
import Typed from "react-typed";

const stringEn = ["Front-end Dev", " React.js Dev", "JS Dev", "", "", ""];
const stringDe = [
  "Front-end Entwickler",
  " React.js Entwickler",
  "JS Entwickler",
  "Anwendungsentwickler",
  "",
  "",
];

const Data = ({ onGermanSelected }) => {
  const greeting = onGermanSelected ? "Hi, ich bin Luis" : "Hi, I'm Luis";
  const description = onGermanSelected
    ? "Ich bin ein Entwickler aus Kuba, zuhause in Morsbach, Deutschland."
    : "I'm a developer from Cuba, based in Morsbach, Germany.";
  const contactme = onGermanSelected ? "Guten Tag sagen" : "Say Hello";
  return (
    <div className={classes["home__data"]}>
      <h1 className={classes["home__title"]}> {greeting}</h1>
      <Typed
        className={classes["home__subtitle"]}
        strings={onGermanSelected ? stringDe : stringEn}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <p className={classes["home__description"]}>{description}</p>
      <a href="#contact" className={`button ${classes["button--flex"]}`}>
        {contactme}
        <i class="uil uil-message"></i>
      </a>
    </div>
  );
};

export default Data;
