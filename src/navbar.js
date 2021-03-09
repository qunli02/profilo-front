import React from "react";
import "./navbar.css";

function navbar() {
  function handleClickIntro(e) {
    e.preventDefault();
    window.scrollTo(0, 48);
  }

  function handleClickProject(e) {
    e.preventDefault();
    window.scrollTo(0, 848);
  }

  function handleClickAbout(e) {
    e.preventDefault();
    window.scrollTo(0, 1646);
  }

  function handleClickContact(e) {
    e.preventDefault();
    window.scrollTo(0, 2204);
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#hi">Intro</a>
        </li>
        <li>
          <a onClick={handleClickProject}>My Projects</a>
        </li>
        <li>
          <a onClick={handleClickAbout}>About</a>
        </li>
        <li>
          <a onClick={handleClickContact}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
