import React, { useState, useEffect } from "react";
import Data from "./Data";
import classes from "./home.module.css";
import Social from "./Social";

const Home = ({ onGermanSelected }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 700) {
        setIsScrolled((prevScrolled) => true);
      } else setIsScrolled((prevScrolled) => false);
      console.log(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <section className={`${classes.home} home`} id="home">
      <div className={`${classes["home__container"]} container grid`}>
        <div className={`${classes["home__content"]} grid`}>
          <Social />
          <div className={classes["home__img"]}></div>
          <Data onGermanSelected={onGermanSelected} />
        </div>

        <div className={classes["scroll-downs"]}>
          <div className={classes["mousey"]}>
            <div className={classes["scroller"]}></div>
          </div>
          <p>{onGermanSelected ? "nach unten scrollen" : "scroll down"}</p>
        </div>
      </div>
      {isScrolled && (
        <a href="#contact" className={`button ${classes["button--flex-up"]}`}>
          <i class="uil uil-arrow-up"></i>
        </a>
      )}
    </section>
  );
};

export default Home;
