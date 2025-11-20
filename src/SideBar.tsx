import './SideBar.css';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {
  FaVrCardboard,
  FaLaptopCode,
  FaTools,
  FaHandsHelping,
  FaHeart,
} from 'react-icons/fa';
import SideBarItem from './SideBarItem';

const Sidebar = ({setSelected}: {setSelected: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div>
      <div className="sidebar sidebar-left">
        <SideBarItem Icon={FaVrCardboard} type="vr" text="VR/AR" setSelected={setSelected} />
        <SideBarItem Icon={FaLaptopCode} type="code" text="I code" setSelected={setSelected} />
        <SideBarItem Icon={FaTools} type="maker" text="I make" setSelected={setSelected} />
        <SideBarItem Icon={FaHandsHelping} type="help" text="I care" setSelected={setSelected} />
        <SideBarItem Icon={FaHeart} type="love" text="I love" setSelected={setSelected} />
      </div>
      <div className="sidebar sidebar-right">
        <a href="https://github.com/yannklein">
          <FaGithub fontSize={48} />
        </a>
        <a href="https://www.linkedin.com/in/yann-klein/">
          <FaLinkedinIn fontSize={48} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
