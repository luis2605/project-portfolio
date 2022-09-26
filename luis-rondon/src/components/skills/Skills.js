import React from "react";
import classes from "./skills.module.css";
import skillsFrontend from "../../data/skills_frontend";
import skillsBackend from "../../data/skills_backend";

const Skills = ({ onGermanSelected }) => {
  const skillsSetFrontend = skillsFrontend.map((skill) => {
    return (
      <div className={classes["skill-container"]}>
        <span className={classes["fz-big"]}>
          <i class="uil uil-angle-right"></i>
        </span>
        <div>
          <h3>{skill.skill} </h3>
          <p>{skill.level}</p>
        </div>
      </div>
    );
  });

  const skillsSetBackend = skillsBackend.map((skill) => {
    return (
      <div className={classes["skill-container"]}>
        <span className={classes["fz-big"]}>
          <i class="uil uil-angle-right"></i>
        </span>
        <div>
          <h3>{skill.skill} </h3>
          <p>{skill.level}</p>
        </div>
      </div>
    );
  });

  const skills = onGermanSelected ? "Fertigkeiten" : "Skills";

  return (
    <section
      className={`${classes["skills__container"]} container`}
      id="skills"
    >
      <h2 className={classes["skills__container-title"]}> {skills}</h2>
      <p>Technical level</p>
      <div className={classes["skillset-container"]}>
        <div className={classes["skill-box"]}>
          <h2>Frontend Dev</h2>

          <div className={classes["box-flex"]}>{skillsSetFrontend}</div>
        </div>

        <div className={classes["skill-box"]}>
          <h2>Backend Dev</h2>
          <div className={classes["box-flex"]}> {skillsSetBackend}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
