import React, { useState, useEffect } from "react";
import classes from "./about.module.css";
import presentationEn from "../../data/presentationEn";
import aboutEn from "../../data/aboutEn";
import aboutDe from "../../data/aboutDe";
import presentationDe from "../../data/presentationDe";
import foto from "../../assets/images/luisnew.png";

const About = ({ onGermanSelected }) => {
  // lang download btn
  const downloadEn = "Download CV";
  const downloadDe = "Lebenslauf herunterladen";
  useEffect(() => {
    const defaultText = onGermanSelected
      ? aboutDe[0].description
      : aboutEn[0].description;
    setSelectedText((prev) => defaultText);
  }, [onGermanSelected]);

  const [selectedText, setSelectedText] = useState("");

  const traitsBoxesEn = aboutEn.map((trait) => {
    return (
      <div
        onClick={() => {
          setSelectedText(trait.description);
        }}
        className={classes["traits__boxes"]}
      >
        {trait.icon}
        <p className={classes["boxes-title"]}>{trait.title}</p>
        <p className={classes["boxes-subtitle"]}>{trait.subtitle}</p>
      </div>
    );
  });
  const traitsBoxesDe = aboutDe.map((trait) => {
    return (
      <div
        onClick={() => {
          setSelectedText(trait.description);
        }}
        className={classes["traits__boxes"]}
      >
        {trait.icon}
        <p className={classes["boxes-title"]}>{trait.title}</p>
        <p className={classes["boxes-subtitle"]}>{trait.subtitle}</p>
      </div>
    );
  });
  return (
    <section className={`${classes["about__container"]} container`}>
      <h2 className={classes["about__container-title"]}>
        {" "}
        {onGermanSelected ? "Über mich" : " About me"}{" "}
      </h2>
      <p>
        {onGermanSelected
          ? presentationDe.presentation_1
          : presentationEn.presentation_1}{" "}
      </p>

      <div className={classes["about__traits"]}>
        <img className={classes["about__traits-img"]} src={foto} alt="foto" />{" "}
        <div className={classes["about__traits-description"]}>
          <div className={classes["traits__boxes-container"]}>
            {onGermanSelected ? traitsBoxesDe : traitsBoxesEn}
          </div>
          <p className={classes["trait__boxes-description"]}>{selectedText}</p>
          <a
            href="../../assets/pdf/_doc_Lebenslauf_Luis_Rondon.pdf"
            download="_doc_Lebenslauf_Luis_Rondon.pdf"
            className={`button ${classes["button--flex"]}`}
          >
            {onGermanSelected ? downloadDe : downloadEn}
            <i class="uil uil-message"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
