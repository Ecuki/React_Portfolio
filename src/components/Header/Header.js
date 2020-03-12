import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faIdCard,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import "./Header.scss";

function Header() {
  return (
    <nav className="nav">
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg" />
          home
        </Link>
        <Link to="/projects">
          <FontAwesomeIcon icon={faFolder} size="lg" />
          projects
        </Link>
        <Link to="/contact">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          contact
        </Link>
        <Link to="/about">
          <FontAwesomeIcon icon={faIdCard} size="lg" />
          about
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
