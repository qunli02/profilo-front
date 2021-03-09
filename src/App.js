import React from "react";
import Welcome from "./welcome.js";
import "./App.css";
import About from "./about.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import NavBar from "./navbar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
