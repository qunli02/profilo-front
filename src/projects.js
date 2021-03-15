import React from "react";
import "./projects.css";

function projects() {
  return (
    <div className="content" id="projects">
      <h1 id="gds">My Projects</h1>
      <h2>Shadow Hunters</h2>
      <p>
        This is a board game called "Shadow Hunter" that I made into a web page.
        This is built on react as front-end and ruby as back end. The{" "}
        <a href="https://github.com/qunli02/mod5-project-front" target="_blank">
          Source Code
        </a>
      </p>

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
      <h2>Stocks Exchange</h2>
      <p>
        This is a stock exchange web-page I made which simulates being an
        investor. It will allow to look up stock and buy and sell stock with
        fake money to see if you will earn or lose money. The{" "}
        <a href="https://github.com/qunli02/mod5-project-front" target="_blank">
          Source Code
        </a>
        and the{" "}
        <a
          href="https://stock-exchange-qunli.herokuapp.com/login"
          target="_blank"
        >
          Web page
        </a>
      </p>
      <h2>Shiba petter</h2>
      <p style={{ marginBottom: 0 }}>
        This is a clicking game with shiba as the theme. The goal of this game
        is to click the shiba tillyou earn pets to buy things in the shop to
        help with earning points. The{" "}
        <a
          href="https://https://github.com/qunli02/clicking-game"
          target="_blank"
        >
          Source Code
        </a>
      </p>
    </div>
  );
}

export default projects;
