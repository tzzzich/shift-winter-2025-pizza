import { useState } from "react";
import pizzaLogo from "/pizza.svg";
import "./App.css";

function App() {
  return (
    <>
      <img src={pizzaLogo} className="logo" alt="Pizza logo" />
      <h2>Please stand by..</h2>
    </>
  );
}

export default App;
