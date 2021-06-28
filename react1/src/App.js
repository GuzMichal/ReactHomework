import React from "react";
import Name from "./Name";
import Button from "./Button";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Pierwsze kroki w React");
  function newTitle() {
    setTitle("Narazie wszystko działa ;)");
  }

  useEffect(() => {
    return () => {
      alert("Teraz był efekt !");
    };
  }, [title]);

  return (
    <div className="App">
      <h1>React - Homework 1</h1>
      {title}
      <Name name="Michał" />
      <Button text="Zmień tytuł strony" newTitle={newTitle} />
      <Button text="Cześć !" />
      <Button text="Do widzenia !" />
    </div>
  );
}

export default App;
