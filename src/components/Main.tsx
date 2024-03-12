import { useState } from 'react';
import "./Main.scss";
import Drawer from './Drawer/Drawer';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Main: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);


  const toggleLeftDrawer = () => {
    setIsLeftOpen(!isLeftOpen);
  };

  const toggleRightDrawer = () => {
    setIsRightOpen(!isRightOpen);
  };

  return (
    <main>
      <button onClick={toggleLeftDrawer}>Toggle left Drawer</button>
      <button onClick={toggleRightDrawer}>Toggle right Drawer</button>

       <Drawer side="left" isOpen = {isLeftOpen}>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
      </Drawer>
      <Drawer side="right" isOpen = {isRightOpen}>
        <h2>Hobbies</h2>
        <ul>
          <li>Photography</li>
          <li>Hiking</li>
        </ul>
      </Drawer>
      <h2 className="header">Hey ! </h2>
      <p className="presentation-text">
        I'm Thomas, a young and passionate <button onClick={toggleLeftDrawer}> full-stack engineer</button>
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
