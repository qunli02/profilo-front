import React from 'react';
import "./about.css";

function about() {
  return (
    <div className="about">

        <h1 id="about-title">About me</h1>
        <p></p>
        <div>
          <img src={require(`./public/me.jpg`)} alt="face" style={{width:"600px",height:"420px",}}/>
        </div>
        <div>
        <p>A full stack software engineer looking for opportunities further my learning. </p>
        </div>
    </div>
  );
}

export default about;
