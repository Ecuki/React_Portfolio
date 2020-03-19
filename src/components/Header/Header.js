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
import "./Header.scss";

function Header() {
  const { isAuthenticated } = useAuth0();
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
        <Link to="/how-to">
          <FontAwesomeIcon icon={faIdCard} size="lg" />
          how-to
        </Link>
        {isAuthenticated && <Link to="/profile">profile</Link>}
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
