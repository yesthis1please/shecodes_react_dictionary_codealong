import React from "react";
import Dictionary from "./Dictionary";

import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="App logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by SheCodes</footer>
      
    </div>
  );
}

