import React, { useState } from "react";
import classes from "./services.module.css";
import webDevEn from "../../data/webDevEn";
import webDevDe from "../../data/webDevDe";
import webReEn from "../../data/webReEn";
import webReDe from "../../data/webReDe";
import webAppEn from "../../data/webAppEn";
import webAppDe from "../../data/webAppDe";

const Services = ({ onGermanSelected }) => {
  const viewMore = onGermanSelected ? "Mehr anzeigen" : "View more";
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
              "Self thought Web developer with 0+ years of experience.Providing quality work to clients and companies"
            );
        onGermanSelected ? setRelServices(webDevDe) : setRelServices(webDevEn);
        break;
      case "webRe":
        onGermanSelected
          ? setModalTitle("Web-Neugestaltung")
          : setModalTitle("Web Redesing");

        onGermanSelected
          ? setModalSubtitle(
              "Grundlegende Designkonzepte, die von einem nicht-professionellen Designer angewandt werden, können ebenfalls einen Unterschied machen und Ihrem Projekt einen zusätzlichen Wert verleihen."
            )
          : setModalSubtitle(
              "Basic Design concepts applied by a non-profesional designer can also make a difference and add extra value to your project"
            );
        onGermanSelected ? setRelServices(webReDe) : setRelServices(webReEn);
        break;
      case "generalApp":
        onGermanSelected
          ? setModalTitle(" Web-App-Programmierung")
          : setModalTitle(" Web-App-programming");
        onGermanSelected
          ? setModalSubtitle(
              "Web-Apps sind die neue, eroberte Grenze in der Web-Programmierung. Das Beste aus beiden Welten kombiniert und zu Ihrer Verfügung."
            )
          : setModalSubtitle(
              "Web Apps are the new conquered frontier in web programming. The best of both worlds combined and at you dispossal."
            );
        onGermanSelected ? setRelServices(webAppDe) : setRelServices(webAppEn);
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
      <div className={classes["list-element"]}>
        <span className={classes["aproved-icon"]}>
          {" "}
          <i class="uil uil-check-circle"></i>
        </span>

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
          <h3>{onGermanSelected ? "Web-Entwicklung" : "Web Development"}</h3>
          <div className={classes["view-more"]}>
            <p
              id="webDev"
              onClick={openModal}
              className={classes["margin-right"]}
            >
              {viewMore}
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
              {viewMore}
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
          <h3> Web-App </h3>
          <div className={classes["view-more"]}>
            <p
              id="generalApp"
              onClick={openModal}
              className={classes["margin-right"]}
            >
              {viewMore}
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
            <span className={classes["close-icon"]}>
              {" "}
              <i onClick={closeModal} class="uil uil-times-circle"></i>
            </span>

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
