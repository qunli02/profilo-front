import React from 'react';
import './navbar.css';

function navbar() {

  function handleClickIntro(e){
    e.preventDefault()
    window.scrollTo(0,48)
  }

  function handleClickProject(e){
    e.preventDefault()
    window.scrollTo(0,848)
  }

  return (
    <div className="navbar">
    <ul>
      <li><a onClick={handleClickIntro}>Intro</a></li>
      <li><a onClick={handleClickProject}>My Projects</a></li>
      <li><a onClick={handleClickIntro}>About</a></li>
      <li><a onClick={handleClickIntro}>Contact</a></li>
    </ul>
    </div>
  );
}

export default navbar;
