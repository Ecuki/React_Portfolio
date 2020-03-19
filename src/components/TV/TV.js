import React, { useState } from "react";
import eyeIcon from "../../assets/img/eye.svg";
import gitIcon from "../../assets/img/github_icon.svg";
import "./TV.scss";

function TV({ name, git, preview, imgs }) {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState("");
  const handleSwitchTV = () => {
    setActive(!active);
    setIndex(0);
    clearTimeout(timerID);
  };

  const timerID = setTimeout(() => {
    active && setIndex(index < imgs.length - 1 ? index + 1 : 0);
  }, 3500);
  const styles = active
    ? {
        backgroundImage: "url(" + imgs[index].src + ")"
      }
    : {};

  return (
    <>
      <h2 className="project__title">{name}</h2>
      <a
        href={preview}
        target="_blank"
        rel="noopener noreferrer"
        title="See demo"
      >
        <img src={eyeIcon} alt="See demo" />
      </a>
      <a href={git} target="_blank" rel="noopener noreferrer" title="GitHub">
        <img src={gitIcon} alt="GitHub" />
      </a>

      <div className="TV">
        <div className="TV__frame"> </div>
        <div
          className={active ? `TV__screen TV__screen-on` : "TV__screen"}
          style={styles}
        ></div>
        <div
          className={active ? `TV__switch TV__switch-active` : "TV__switch"}
          onClick={handleSwitchTV}
          title="Turn ON/OFF"
        ></div>
      </div>
    </>
  );
}

export default TV;
