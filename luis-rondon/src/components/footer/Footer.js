import React, { useState, useEffect } from "react";
import classes from "./footer.module.css";

const Footer = ({ onGermanSelected }) => {
  const germanLinks = [
    {
      name: "Über mich",
      href: "#about",
    },
    {
      name: "Projekte",
      href: "#projects",
    },
    {
      name: "Dienstleistungen",
      href: "#services",
    },
  ];
  const englishLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Project",
      href: "#projects",
    },
    {
      name: "Services",
      href: "#services",
    },
  ];
  const [links, setLinks] = useState(englishLinks);

  useEffect(() => {
    if (onGermanSelected) {
      setLinks((prev) => {
        return germanLinks;
      });
    } else
      setLinks(() => {
        return englishLinks;
      });
  }, [onGermanSelected]);

  const linksDisplayed = links.map((link) => {
    return (
      <a className={classes["links-text"]} href={link.href}>
        {link.name}
      </a>
    );
  });

  return (
    <footer className={classes.footer}>
      <div className={classes["title-container"]}>
        {" "}
        <h2 className={classes["footer-title"]}>
          {" "}
          " Imagination is the only weapon in the war against reality... "{" "}
        </h2>
        <h3 className={classes["footer-autor"]}> Lewis Carroll</h3>
      </div>

      <div className={classes["links-container"]}>{linksDisplayed} </div>
      <div className={classes["social-container"]}>
        <a
          className={classes["social-links"]}
          href="https://www.facebook.com/luisRondn/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={classes["icons-big"]}>
            {" "}
            <i class="uil uil-facebook"></i>
          </span>
        </a>
        <a
          className={classes["social-links"]}
          href="https://www.facebook.com/luisRondn/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={classes["icons-big"]}>
            {" "}
            <i class="uil uil-instagram-alt"></i>
          </span>
        </a>
        <a
          className={classes["social-links"]}
          href="https://twitter.com/LuisRon33826668"
          target="_blank"
          rel="noreferrer"
        >
          <span className={classes["icons-big"]}>
            {" "}
            <i class="uil uil-twitter"></i>
          </span>
        </a>
      </div>
      <p>
        {" "}
        &#169;CubanCode.
        {onGermanSelected
          ? " Alle Rechte reserviert"
          : " All rights reserved "}{" "}
      </p>
    </footer>
  );
};
export default Footer;
