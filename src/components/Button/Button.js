import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ className, text, to }) {
  return (
    <Link to={to} className={`button ${className}`}>
      {text}
    </Link>
  );
}

export default Button;
