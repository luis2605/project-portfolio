import React, { useState } from "react";
import classes from "./services.module.css";
import webDevEn from "../../data/webDevEn";
import webDevDe from "../../data/webDevDe";

const Services = ({ onGermanSelected }) => {
  const services = onGermanSelected ? " Dienstleistungen" : " Services";
  const whatIcanDo = onGermanSelected
    ? "Was ich für Sie tun kann "
    : "What i can do for you";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [relServices, setRelServices] = useState(webDevEn);

  // opening & closing modal
  const openModal = (event) => {
    console.log(onGermanSelected);
    setIsModalOpen((prevMod) => {
      return !prevMod;
    });
    // changing title

    switch (event.target.id) {
      case "webDev":
        onGermanSelected
          ? setModalTitle("Webentwickler")
          : setModalTitle("Webdeveloper");
        onGermanSelected
          ? setModalSubtitle(
              "Selbständiger Webentwickler mit 0+ Jahren Erfahrung, der Kunden und Unternehmen qualitativ hochwertige Arbeit bietet."
            )
          : setModalSubtitle(
              "Self thought Web developer with 0+ years of experience.Providing qualyty work to clients and companies"
            );
        onGermanSelected ? setRelServices(webDevDe) : setRelServices(webDevEn);
        break;
      case "webRe":
        onGermanSelected
          ? setModalTitle("Web-Neugestaltung")
          : setModalTitle("Web Redesing");
        break;
      case "generalApp":
        onGermanSelected
          ? setModalTitle("Allgemeine Web-App-Programmierung")
          : setModalTitle("General Web-App programming");
        break;
      default:
        //Statements executed when none of
        //the values match the value of the expression
        break;
    }
    console.log(event.target.id);
    console.log();

    console.log(modalTitle);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // mapping info for modal

  const relationedServices = relServices.map((serv) => {
    return (
      <div>
        <i class="uil uil-check-circle"></i>
        <p>{serv.name}</p>
      </div>
    );
  });
  return (
    <section
      className={`${classes["services__container"]} container`}
      id="services"
    >
      <h2 className={classes["services__container-title"]}> {services}</h2>
      <p>{whatIcanDo}</p>
      <div className={classes["service-container-boxes"]}>
        <div className={classes["service"]}>
          <span className={classes["big-font"]}>
            {" "}
            <i class="uil uil-web-grid-alt"></i>
          </span>{" "}
          <h3>Web Development</h3>
          <div className={classes["view-more"]}>
            <p
              id="webDev"
              onClick={openModal}
              className={classes["margin-right"]}
            >
              View more
            </p>
            <span className={classes["arrow-animation"]}>
              {" "}
              <i class="uil uil-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className={classes["service"]}>
          <span className={classes["big-font"]}>
            {" "}
            <i class="uil uil-brackets-curly"></i>
          </span>{" "}
          <h3>Web Redesign</h3>
          <div className={classes["view-more"]}>
            <p
              id="webRe"
              onClick={openModal}
              className={classes["margin-right"]}
            >
              View more
            </p>
            <span className={classes["arrow-animation"]}>
              {" "}
              <i class="uil uil-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className={classes["service"]}>
          <span className={classes["big-font"]}>
            {" "}
            <i class="uil uil-browser"></i>
          </span>{" "}
          <h3>General Web-App programming</h3>
          <div className={classes["view-more"]}>
            <p
              id="generalApp"
              onClick={openModal}
              className={classes["margin-right"]}
            >
              View more
            </p>
            <span className={classes["arrow-animation"]}>
              {" "}
              <i class="uil uil-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={classes["overlay-textBox"]}>
          <div className={classes["text-box"]}>
            <i onClick={closeModal} class="uil uil-times-circle"></i>
            <div className={classes["text-box-intro"]}>
              <h3>{modalTitle}</h3>
              <p>{modalSubtitle}</p>
            </div>
            <div className={classes["services-list"]}>{relationedServices}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
