import './Drawer.scss';
import 'animate.css';

interface DrawerProps {
 side: 'left' | 'right';
 children: React.ReactNode;
 isOpen: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ side, children , isOpen}) => {
 return (
    <div className={`drawer ${side} ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        {children}
      </div>
    </div>
 );
};

export default Drawer;