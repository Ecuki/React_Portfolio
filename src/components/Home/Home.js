import React from "react";
import Button from "../Button";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <h1 className="title">Hi, I'm Emil</h1>
        <h2>let's get to know each other</h2>
        <Button
          className="projects"
          text="projects"
          to="React_Portfolio/projects"
        />
        <Button
          className="contact"
          text="contact"
          to="React_Portfolio/contact"
        />
      </div>
    </div>
  );
}

export default Home;
