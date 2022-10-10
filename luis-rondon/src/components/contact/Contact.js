import classes from "./contact.module.css";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import MessageSentModal from "../aux-comp/MessageSentModal";
import Whatsapp from "../aux-comp/Whatsapp";
import FBMessenger from "../aux-comp/FBMessenger";
const Contact = ({ onGermanSelected }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [isMessengerOpen, setIsMessengerOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    if (e.target[0].value.trim() !== "") {
      // uncomment to use emailjs services to send emails
      // emailjs
      //   .sendForm(
      //     "service_o7232o8",
      //     "template_8gbr6i7",
      //     form.current,
      //     "w8i-MYpJsPdByE4CM"
      //   )
      //   .then(
      //     (result) => {
      //       // show the user a success message
      //     },
      //     (error) => {
      //       // show the user an error
      //     }
      //   );

      setIsModalOpen((prev) => {
        return !prev;
      });
      console.log(e);
      let a;
      for (a = 0; a < 3; a++) {
        e.target[a].value = "";
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen((prev) => {
      return !prev;
    });
  };
  // whatsapp message

  const openCloseWhatsappModal = () => {
    setIsWhatsappOpen((prev) => {
      return !prev;
    });
  };
  // whatsapp message

  const openCloseMessengerModal = () => {
    setIsMessengerOpen((prev) => {
      return !prev;
    });
  };
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
          <div
            onClick={openCloseWhatsappModal}
            className={classes["left__containers"]}
          >
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
            <div
              onClick={openCloseMessengerModal}
              className={classes["left__containers-text"]}
            >
              <p>Write me </p>
              <i class="uil uil-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className={classes["form__container-right"]}>
          <p>Write me your project</p>
          {/* input form  */}
          <form
            className={classes["form-container"]}
            ref={form}
            onSubmit={sendEmail}
          >
            <span className={classes["input-el-container"]}>
              {" "}
              <label className={classes["input-title"]}>Name</label>
              <br></br>
              <input
                className={classes["input-text"]}
                type="text"
                name="from_name"
              />
            </span>
            <span className={classes["input-el-container"]}>
              <label className={classes["input-title"]}>Email</label> <br></br>
              <input
                className={classes["input-text"]}
                type="email"
                name="user_email"
              />
            </span>
            <span className={classes["input-el-container"]}>
              <label className={classes["input-title-pro"]}>Message</label>{" "}
              <br></br>
              <textarea
                className={classes["input-text"]}
                name="message"
                placeholder="Write your ideas here"
              />
            </span>
            <input
              className={classes["sub-btn"]}
              type="submit"
              value="Send"
            ></input>{" "}
          </form>
        </div>
      </div>
      {/* Modal when message sent */}
      {ReactDOM.createPortal(
        isModalOpen && <MessageSentModal onCloseModal={closeModal} />,

        document.getElementById("modal")
      )}
      {/* Modal when Whatsapp clicked */}
      {ReactDOM.createPortal(
        isWhatsappOpen && (
          <Whatsapp onOpenCloseWhatsapp={openCloseWhatsappModal} />
        ),

        document.getElementById("modal")
      )}

      {/* Modal when Messenger clicked */}
      {ReactDOM.createPortal(
        isMessengerOpen && (
          <FBMessenger onOpenCloseMessenger={openCloseMessengerModal} />
        ),

        document.getElementById("modal")
      )}
    </section>
  );
};

export default Contact;
