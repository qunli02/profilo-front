import React from "react";
import "./projects.css";

function projects() {
  return (
    <div className="content" id="projects">
      <h1 id="gds">My Projects</h1>
      <h2>Shadow Hunters</h2>
      <a href="https://github.com/qunli02/mod5-project-front" target="_blank">
        Source Code
      </a>
      <br />
      <a
        href="https://drive.google.com/file/d/17plY5qQDq6J_5yiNq6m2IPpOIFD1a4ie/view"
        target="_blank"
      >
        <img
          src={require(`./public/shadowhunter.png`)}
          alt="shadow hunter"
          style={{ width: "700px", height: "500px" }}
        />
      </a>
      <h2></h2>
    </div>
  );
}

export default projects;
