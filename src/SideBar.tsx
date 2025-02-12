import './SideBar.css';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {
  FaVrCardboard,
  FaLaptopCode,
  FaTools,
  FaHandsHelping,
  FaHeart,
} from 'react-icons/fa';

const Sidebar = ({setSelected}: {setSelected: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div>
      <div className="sidebar sidebar-left">
        <a className="icon icon-vr" onClick={() => setSelected("vr")}>
          <FaVrCardboard fontSize={48} />
          <p className="icon-text">VR/AR</p>
        </a>
        <a className="icon icon-code" onClick={() => setSelected("code")}>
          <FaLaptopCode fontSize={48} />
          <p className="icon-text">I code</p>
        </a>
        <a className="icon icon-maker" onClick={() => setSelected("maker")}>
          <FaTools fontSize={48} />
          <p className="icon-text">I make</p>
        </a>
        <a className="icon icon-help" onClick={() => setSelected("help")}>
          <FaHandsHelping fontSize={48} />
          <p className="icon-text">I care</p>
        </a>
        <a className="icon icon-love" onClick={() => setSelected("love")}>
          <FaHeart fontSize={48} />
          <p className="icon-text">I love</p>
        </a>
      </div>
      <div className="sidebar sidebar-right">
        <a href="https://github.com/yannklein">
          <FaGithub fontSize={48} />
        </a>
        <a href="https://twitter.com/yannlucklein">
          <FaTwitter fontSize={48} />
        </a>
        <a href="https://www.linkedin.com/in/yann-klein/">
          <FaLinkedinIn fontSize={48} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
