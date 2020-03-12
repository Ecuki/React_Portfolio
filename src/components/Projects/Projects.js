import React from "react";
import TV from "../TV";
import Logo from "../../assets/img/lake.jpg";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects-site">
      <TV imgPath={Logo} />
      <TV imgPath={Logo} />
      <TV imgPath={Logo} />
      <TV imgPath={Logo} />
    </div>
  );
}

export default Projects;
