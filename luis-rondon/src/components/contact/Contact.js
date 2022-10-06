import React from "react";
import classes from "./contact.module.css";

const Contact = ({ onGermanSelected }) => {
  return (
    <section
      className={`${classes["contact__container"]} container`}
      id="contact"
    >
      <h2 className={classes["contact__container-title"]}>
        {onGermanSelected ? "Kontaktieren Sie mich" : "Contact me"}
      </h2>
      <p>{onGermanSelected ? "Kontakt aufnehmen" : "Get in touch"}</p>

      <div className={classes["form__container"]}>
        <div className={classes["form__container-left"]}>
          <p>Talk to me</p>
          <div className={classes["left__containers"]}>
            <span className={classes["big-size"]}>
              <i class="uil uil-whatsapp"></i>
            </span>
            <h3> Whatsapp</h3>
            <div className={classes["left__containers-text"]}>
              <p>Write me </p>
              <i class="uil uil-arrow-right"></i>
            </div>
          </div>
          <div className={classes["left__containers"]}>
            <span className={classes["big-size"]}>
              <i class="uil uil-facebook-messenger"></i>
            </span>
            <h3> Messenger</h3>
            <div className={classes["left__containers-text"]}>
              <p>Write me </p>
              <i class="uil uil-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className={classes["form__container-right"]}>
          <p>Formular hier</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
