import React, { useState } from "react";
import "./TV.scss";

function TV({ imgPath }) {
  const [active, setActive] = useState(false);
  const handleSwitchTV = () => {
    setActive(!active);
  };

  const styles = active
    ? {
        backgroundImage: "url(" + imgPath + ")"
      }
    : {};

  return (
    <div className="TV">
      <div className="TV__frame"> </div>
      <div
        className={active ? `TV__screen TV__screen-on` : "TV__screen"}
        style={styles}
      ></div>
      <div
        className={active ? `TV__switch TV__switch-active` : "TV__switch"}
        onClick={handleSwitchTV}
      ></div>
    </div>
  );
}

export default TV;
