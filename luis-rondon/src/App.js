import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about-me/About";
import Skills from "./components/skills/Skills";

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
      <About onGermanSelected={germanSelected} />
      <About onGermanSelected={germanSelected} />
      <About onGermanSelected={germanSelected} />
      <Skills onGermanSelected={germanSelected} />
    </>
  );
}

export default App;
