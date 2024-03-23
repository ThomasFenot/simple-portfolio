import { useState } from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { RiFileMusicFill } from "react-icons/ri";

import Drawer from './Drawer/Drawer';
import TextButton from './TextButton/TextButton';

import "./Main.scss";
import TextWheel from './TextWheel/TextWheel';

const Main: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState<boolean>(false);
  const [isRightOpen, setIsRightOpen] = useState<boolean>(false);

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
         I'm<i> Thomas Fenot, </i>
        <TextWheel setIsLeftOpen={setIsLeftOpen} setIsRightOpen={setIsRightOpen}/>
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
