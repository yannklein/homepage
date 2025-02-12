import { useState } from 'react';
import { IconType } from 'react-icons';

const SideBarItem = ({ Icon, type, text, setSelected }: {Icon: IconType, type: string, text: string, setSelected: React.Dispatch<React.SetStateAction<string>>}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setSelected(currentType => (currentType === type ? 'all' : type));
  }
  return (
    <a
      className={`icon icon-${type}`}
      onClick={handleClick}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <p className="icon-text">{text}</p> : <Icon fontSize={48} />}
    </a>
  );
};

export default SideBarItem;
