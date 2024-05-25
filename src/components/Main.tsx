import { useState } from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { RiFileMusicFill } from "react-icons/ri";

import Drawer from './Drawer/Drawer';
import TextButton from './TextButton/TextButton';

import "./Main.scss";

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
       <Drawer side="left" isOpen = {isLeftOpen}>
        <h2 className="drawer-header">Skills</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>.Net</li>
          <li>Sql</li>
          <li>EF</li>
          <li>C#</li>
        </ul>
      </Drawer>
      <Drawer side="right" isOpen = {isRightOpen}>
        <h2 className="drawer-header">Hobbies</h2>
        <ul>
          <li>Music</li>
          <li>Speleology</li>
        </ul>
      </Drawer>
      <h2 className="header">Hey !</h2>
      <div className="presentation-text">
        I'm<i> Thomas Fenot</i>, a young and passionate <TextButton onClickAction={toggleLeftDrawer} value='full-stack engineer'/> and <TextButton onClickAction={toggleRightDrawer} value='much more.'/>
      </div>
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
