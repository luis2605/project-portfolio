import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import classes from "./testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../../data/testimonialsEn";

const Testimonials = ({ onGermanSelected }) => {
  //check windowSize for displaying conditionally prop slidesToShow
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowsResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowsResize);
    return () => {
      window.removeEventListener("resize", handleWindowsResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: windowSize.innerWidth < 425 ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  const testm = testimonials.map((tst) => {
    return (
      <div key={tst.id} className={classes["testimonials-item"]}>
        <img
          className={classes["testimonials-item-img"]}
          src={tst.img}
          alt={tst.name}
        ></img>
        <h3 className={classes["testimonials-item-name"]}>{tst.name}</h3>
        <p className={classes["testimonials-item-text"]}>{tst.text}</p>
      </div>
    );
  });

  return (
    <section
      className={`${classes["testimonials__container"]} container`}
      id="testimonials"
    >
      <h2 className={classes["testimonials__container-title"]}>Testimonial</h2>
      <p>{onGermanSelected ? "Meine Kunden sagten" : "My clients saying"}</p>

      <Slider {...settings}>{testm}</Slider>
    </section>
  );
};
//getting windows size and deconstructuring in
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Testimonials;
