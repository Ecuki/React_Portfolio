import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../Login/react-auth0-spa.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faIdCard,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import Home from "../Home";
import "./Header.scss";

function Header() {
  const { isAuthenticated } = useAuth0();
  const PATH = "/React_Portfolio";
  return (
    <nav className="nav">
      <Link to={PATH}>
        <Logo />
      </Link>
      <ul>
        <Link to={PATH}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          home
        </Link>
        <Link to={PATH + "/projects"}>
          <FontAwesomeIcon icon={faFolder} size="lg" />
          projects
        </Link>
        <Link to={PATH + "/contact"}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          contact
        </Link>
        <Link to={PATH + "/how-to"}>
          <FontAwesomeIcon icon={faIdCard} size="lg" />
          how-to
        </Link>
        {isAuthenticated && <Link to={PATH + "/profile"}>profile</Link>}
        <Login />
      </ul>
    </nav>
  );
}

function Login() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const props = !isAuthenticated
    ? {
        class: "button login",
        onClick: () => loginWithRedirect({}),
        text: "Log in"
      }
    : { class: "button logout", onClick: () => logout(), text: "Log out" };
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Header;
