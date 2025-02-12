import "./IntroPopup.css";
import React, { useEffect, useRef } from 'react';
import { addIntroPopup, initThree } from './scripts/three/initThree';

const IntroPopup = ({
  setIntroPopupLoaded,
}: {
  setIntroPopupLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ipElement = useRef(null);
  useEffect(() => {
    if (!ipElement.current) return;
    const popupScene = initThree('introWorld', ipElement.current);
    addIntroPopup(ipElement.current, popupScene, setIntroPopupLoaded);
  })

  return <div className="intro-popup" ref={ipElement}></div>;
};

export default IntroPopup;
