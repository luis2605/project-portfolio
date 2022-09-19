import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

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
    </>
  );
}

export default App;
