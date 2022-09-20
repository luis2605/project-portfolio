import classes from "../components/about-me/about.module.css";
const aboutEn = [
  {
    title: "Experience",
    subtitle: "Junior Level",
    icon: (
      <span className={classes["dark"]}>
        <i class="uil uil-award"></i>
      </span>
    ),
    description:
      "I 've created many web pages with friendly UI/UX user interface.Still learning...a",
  },
  {
    title: "Completed",
    subtitle: "~ 30",
    icon: (
      <span className={classes["dark"]}>
        {" "}
        <i class="uil uil-bag"></i>
      </span>
    ),
    description:
      "More than 30 Projects  I've completed as part of my Frontend Developer training  ",
  },
  {
    title: "Support",
    subtitle: "in 3 languages",
    icon: (
      <span className={classes["dark"]}>
        <i class="uil uil-comment-verify"></i>
      </span>
    ),
    description:
      "I can fluently communicate in 3 languages ,what it has proven to be an advantage for developing my problem solving skills ",
  },
];

export default aboutEn;
