import React, { useState } from 'react';
import './Drawer.scss';

interface DrawerProps {
 side: 'left' | 'right';
 children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ side, children }) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleDrawer = () => {
    setIsOpen(!isOpen);
 };

 return (
    <div className={`drawer ${side} ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <div className="drawer-content">
        {children}
      </div>
    </div>
 );
};

export default Drawer;