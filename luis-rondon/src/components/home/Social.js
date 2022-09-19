import React from "react";
import classes from "./home.module.css";
import frontEndLogo from "../../assets/images/frontendmentor.webp";

const Social = () => {
  return (
    <div className={classes["home__social"]}>
      <a
        href="https://www.linkedin.com/in/luis-rondon-crespo-96537a1b6/"
        className={classes["home__social-icon"]}
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/luis2605"
        className={classes["home__social-icon"]}
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://www.frontendmentor.io/profile/luis2605"
        className={classes["home__social-icon"]}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={classes["home__social-icon-img"]}
          src={frontEndLogo}
          alt=""
        />
      </a>
    </div>
  );
};

export default Social;
