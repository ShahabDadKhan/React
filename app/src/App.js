// import logo from "./logo.svg";
// import './App.css';

import React from "react";

import Ninjas from "./ninjas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>This is my first React App</h1>
        <p>Welcome to code base</p>
        <Ninjas name="Toruk Makto" />
      </header>
    </div>
  );
}

export default App;
