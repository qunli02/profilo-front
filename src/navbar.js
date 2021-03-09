import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#welcome">Intro</a>
        </li>
        <li>
          <a a href="#projects">
            My Projects
          </a>
        </li>
        <li>
          <a a href="#about">
            About
          </a>
        </li>
        <li>
          <a a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
