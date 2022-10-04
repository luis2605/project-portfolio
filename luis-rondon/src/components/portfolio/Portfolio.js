import React, { useState } from "react";
import classes from "./portfolio.module.css";
import portWeb from "../../data/portWeb";
import appWeb from "../../data/appWeb";

const Portfolio = ({ onGermanSelected }) => {
  const [isSelected, setIsSelected] = useState(portWeb);

  const allSelected = () => {
    const all = portWeb.concat(appWeb);

    setIsSelected((prev) => all);
  };
  const webSelected = () => {
    setIsSelected((prev) => portWeb);
  };
  const appSelected = () => {
    setIsSelected((prev) => appWeb);
  };

  const selectedArr = isSelected.map((sel) => {
    return (
      <div key={sel.id} className={classes["portfolio-item"]}>
        <img
          className={classes["portfolio-img"]}
          src={sel.img}
          alt={sel.name}
        ></img>
        <div className={classes["portfolio-item-text"]}>
          <h2>{sel.name}</h2>
          <div className={classes["item-links"]}>
            <a
              className={classes["portfolio-link"]}
              href={sel.code}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <h3>Code</h3>
              <i class="uil uil-angle-double-right"></i>
            </a>
            <a
              className={classes["portfolio-link"]}
              href={sel.demo}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <h3>{sel.demoText} </h3>
              <i class="uil uil-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section
      className={`${classes["portfolio__container"]} container`}
      id="portfolio"
    >
      <h2 className={classes["portfolio__container-title"]}>Portfolio</h2>
      <p>{onGermanSelected ? "Letzte Projekte" : "Most recent work"}</p>

      <div className={classes["portfolio-selectors"]}>
        <h3 className={classes["selectors-title"]} onClick={allSelected}>
          All
        </h3>
        <h3 className={classes["selectors-title"]} onClick={webSelected}>
          Web
        </h3>
        <h3 className={classes["selectors-title"]} onClick={appSelected}>
          App
        </h3>
      </div>
      <div className={classes["portfolio-items"]}>{selectedArr}</div>
    </section>
  );
};

export default Portfolio;
