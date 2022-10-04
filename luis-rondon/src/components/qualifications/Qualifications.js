import React, { useState, useEffect } from "react";
import classes from "./qualifications.module.css";
import education from "../../data/education";
import educationDe from "../../data/educationDe";
import experience from "../../data/experience";
import experienceDe from "../../data/experienceDe";
const Qualifications = ({ onGermanSelected }) => {
  const [isExpSel, setExpSel] = useState(false);

  const toExp = () => {
    setExpSel((prev) => {
      return true;
    });
    setEducationData((prev) => {
      return experience;
    });
  };

  const toEdu = () => {
    setExpSel((prev) => {
      return false;
    });
    setEducationData((prev) => {
      return education;
    });
  };

  useEffect(() => {
    if (isExpSel) {
      const defaultText = onGermanSelected ? experienceDe : experience;
      setEducationData((prev) => defaultText);
    } else {
      const defaultText = onGermanSelected ? educationDe : education;
      setEducationData((prev) => defaultText);
    }
  }, [isExpSel, onGermanSelected]);
  const [educationData, setEducationData] = useState(education);

  const educationQ = educationData.map((edu) => {
    return (
      <div
        className={`${classes["cv-tabs"]} ${classes[`${edu.position}`]} ${
          classes[`${edu.positionLast}`]
        }`}
      >
        <h3>{edu.name} </h3>
        <p>{edu.place}</p>
        <div className={classes["cv-calendar"]}>
          <i class="uil uil-calendar-alt"></i>
          <p>{edu.time}</p>
        </div>
      </div>
    );
  });
  return (
    <section
      className={`${classes["qualifications__container"]} container`}
      id="qualifications"
    >
      <h2 className={classes["qualifications__container-title"]}>
        {" "}
        {onGermanSelected ? "Qualifikationen" : "Qualifications"}
      </h2>
      <p>
        {onGermanSelected
          ? "Meine ganz persönliche Entwicklung"
          : "My personal journey"}
      </p>
      <div className={classes["qualification-container"]}>
        <div className={classes["info-choice-container"]}>
          <div className={classes["info__choice"]}>
            <span className={classes["big-font"]}>
              <i class="uil uil-graduation-cap"></i>
            </span>
            <h3 onClick={toEdu}>
              {onGermanSelected ? "Bildung" : "Education"}{" "}
            </h3>
          </div>
          <div className={classes["info__choice"]}>
            <span className={classes["big-font"]}>
              {" "}
              <i class="uil uil-clipboard"></i>
            </span>
            <h3 onClick={toExp}>
              {onGermanSelected ? " Erfahrung" : "Working Experience"}
            </h3>
          </div>
        </div>
      </div>
      <div className={classes["cv-container"]}>{educationQ} </div>
    </section>
  );
};

export default Qualifications;
