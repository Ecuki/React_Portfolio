import React, { useRef, useEffect } from "react";

import Button from "../Button";
import "./Home.scss";
import gsap from "gsap";

function Home() {
  const welcome = useRef(null);

  useEffect(() => {
    const el = welcome.current.children;
    const { title, subtitle, projects, contact } = el;
    console.log(title);

    gsap.set([title, subtitle, projects, contact], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      title,
      { x: "-=300" },
      { duration: 0.7, x: "+=300", autoAlpha: 1 }
    )
      .fromTo(
        subtitle,
        { x: "-=300" },
        { duration: 0.7, x: "+=300", autoAlpha: 1 }
      )
      .fromTo(
        projects,
        { x: "-=300" },
        { duration: 0.5, x: "+=300", autoAlpha: 1 }
      )
      .fromTo(
        contact,
        { x: "+=300" },
        { duration: 0.5, x: "-=300", autoAlpha: 1 },
        "-=.5"
      );
  }, []);

  return (
    <div className="home">
      <div ref={welcome} className="welcome">
        <h1 className="title" id="title">
          Hi, I'm Emil
        </h1>
        <h2 id="subtitle">let's get to know each other</h2>
        <Button
          id="projects"
          className="projects"
          text="projects"
          to="React_Portfolio/projects"
        />
        <Button
          id="contact"
          className="contact"
          text="contact"
          to="React_Portfolio/contact"
        />
      </div>
    </div>
  );
}

export default Home;
