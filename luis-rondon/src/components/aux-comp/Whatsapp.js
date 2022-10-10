import React from "react";
import classes from "./whatsapp.module.css";
import whatsicon from "../../assets/images/WhatsAppButtonGreenMedium.svg";

const Whatsapp = ({ onOpenCloseWhatsapp }) => {
  return (
    <div className={classes["overlay-textBox"]}>
      <div className={classes["text-box"]}>
        <span className={classes["close-icon"]}>
          {" "}
          <i onClick={onOpenCloseWhatsapp} class="uil uil-times-circle"></i>
        </span>

        <div className={classes["text-box-intro"]}>
          <h3>Please Click here :</h3>
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/4917651812704"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img alt="Chat on WhatsApp" src={whatsicon} />
          </a>
          <p>for start chatting with me.</p>
        </div>
        <div className={classes["services-list"]}></div>
      </div>
    </div>
  );
};

export default Whatsapp;
