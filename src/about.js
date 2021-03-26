import React from "react";
import "./about.css";

function about() {
  return (
    <div className="content" id="about">
      <h1 id="about-title">About me</h1>
      <p></p>
      <div>
        <img
          src={require(`./public/me.jpg`)}
          alt="face"
          style={{ width: "600px", height: "420px" }}
        />
      </div>
      <div>
        <p>
          A full stack software engineer graduated from Flatiron School. Looking
          for opportunities to get into the tech field. Looking for any kind of
          opening in NYC.{" "}
        </p>
      </div>
    </div>
  );
}

export default about;
