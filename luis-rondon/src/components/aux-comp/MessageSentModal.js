import React from "react";
import classes from "./messageSentModal.module.css";

const MessageSentModal = ({ onCloseModal }) => {
  return (
    <div className={classes["overlay-textBox"]}>
      <div className={classes["text-box"]}>
        <span className={classes["close-icon"]}>
          {" "}
          <i onClick={onCloseModal} class="uil uil-times-circle"></i>
        </span>

        <div className={classes["text-box-intro"]}>
          <h3>Thank you</h3>
          <p>Your message has been sent</p>
        </div>
        <div className={classes["services-list"]}></div>
      </div>
    </div>
  );
};

export default MessageSentModal;
