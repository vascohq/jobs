import { useState } from "react";
import vascoLogo from "./assets/vasco.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={vascoLogo} className="logo vasco" alt="Vasco logo" />
      </div>
      <h1>Vasco Frontend Challenge</h1>
      <p>Good luck and have fun!</p>
    </div>
  );
}

export default App;
