import React from "react";
import Data from "./Data";
import classes from "./home.module.css";
import Social from "./Social";

const Home = ({ onGermanSelected }) => {
  return (
    <section className={`${classes.home} home`} id="home">
      <div className={`${classes["home__container"]} container grid`}>
        <div className={`${classes["home__content"]} grid`}>
          <Social />
          <div className={classes["home__img"]}></div>
          <Data onGermanSelected={onGermanSelected} />
        </div>
      </div>
    </section>
  );
};

export default Home;
