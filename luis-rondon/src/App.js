import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about-me/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer.js";

function App() {
  const [germanSelected, setGermanSelected] = useState(false);

  const setGermanSelectedHandler = (value) => {
    setGermanSelected((prev) => value);
  };
  return (
    <>
      <Header
        onGermanSelected={germanSelected}
        onSetGermanSelectedHandler={setGermanSelectedHandler}
      />
      <Home onGermanSelected={germanSelected} />
      <About onGermanSelected={germanSelected} />

      <Skills onGermanSelected={germanSelected} />
      <Services onGermanSelected={germanSelected} />
      <Qualifications onGermanSelected={germanSelected} />
      <Portfolio onGermanSelected={germanSelected} />
      <Testimonials onGermanSelected={germanSelected} />
      <Contact onGermanSelected={germanSelected} />
      <Footer onGermanSelected={germanSelected} />
    </>
  );
}

export default App;
