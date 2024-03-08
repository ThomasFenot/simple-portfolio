import React from "react";
import "./Main.scss";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Main: React.FC = () => {
  return (
    <main>
      <h2 className="header">Hey ! </h2>
      <p className="presentation-text">
        I'm Thomas, a young and passionate full-stack engineer
      </p>
      <h2 className="icon-container">
        <a href="https://github.com/ThomasFenot " target="_blank" rel="noopener noreferrer" className="icon-link">
          <AiFillGithub />
        </a>
        <a href="mailto:portfolio-contact@fenot.dev" target="_blank" rel="noopener noreferrer" className="icon-link">
          <AiFillMail />
        </a>
        <a href="https://linkedin.fenot.dev" target="_blank" rel="noopener noreferrer" className="icon-link">
          <AiFillLinkedin />
        </a>
      </h2>
    </main>
  );
};

export default Main;
