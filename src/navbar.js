import React from 'react';
import './navbar.css';

function navbar() {

  function handleClick(e){
    e.preventDefault()
    window.scrollTo(0,48)
  }



  return (
    <div className="navbar">
    <ul>
      <li><a onClick={handleClick}>Intro</a></li>
      <li><a href="news.asp">My Projects</a></li>
      <li><a href="contact.asp">About</a></li>
      <li><a href="about.asp">Contact</a></li>
    </ul>
    </div>
  );
}

export default navbar;
