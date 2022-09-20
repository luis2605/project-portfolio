import classes from "../components/about-me/about.module.css";
const aboutEn = [
  {
    title: "Erfahrung",
    subtitle: "Junior Level",
    icon: (
      <span className={classes["dark"]}>
        <i class="uil uil-award"></i>
      </span>
    ),
    description:
      "Ich habe viele Webseiten mit freundlicher UI/UX-Benutzeroberfläche erstellt und lerne immer noch.",
  },
  {
    title: "Abgeschlossen",
    subtitle: "~ 30",
    icon: (
      <span className={classes["dark"]}>
        {" "}
        <i class="uil uil-bag"></i>
      </span>
    ),
    description:
      "Mehr als 30 Projekte, die ich im Rahmen meiner Ausbildung zum Frontend-Entwickler durchgeführt habe  ",
  },
  {
    title: "Unterstützung",
    subtitle: "in 3 Sprachen",
    icon: (
      <span className={classes["dark"]}>
        <i class="uil uil-comment-verify"></i>
      </span>
    ),
    description:
      "Ich kann fließend in 3 Sprachen kommunizieren, was sich als Vorteil für die Entwicklung meiner Problemlösungsfähigkeiten erwiesen hat. ",
  },
];

export default aboutEn;
