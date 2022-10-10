import React from "react";
import classes from "./fbMessenger.module.css";
import messengerIcon from "../../assets/images/facebook-messenger-white-logo.svg";

const Whatsapp = ({ onOpenCloseMessenger }) => {
  return (
    <div className={classes["overlay-textBox"]}>
      <div className={classes["text-box"]}>
        <span className={classes["close-icon"]}>
          {" "}
          <i onClick={onOpenCloseMessenger} class="uil uil-times-circle"></i>
        </span>

        <div className={classes["text-box-intro"]}>
          <h3>Please Click here :</h3>
          <a
            aria-label="Chat on Messenger"
            href="https://m.me/luisRondn"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img alt="Chat on WhatsApp" src={messengerIcon} />
          </a>
          <p>for start chatting with me.</p>
        </div>
        <div className={classes["services-list"]}></div>
      </div>
    </div>
  );
};

export default Whatsapp;
