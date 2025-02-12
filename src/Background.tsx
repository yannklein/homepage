import { useEffect, useRef, useState } from 'react';
import './Background.css';
import Loading from './Loading';
import {
  initThree,
  addBackground,
  ThreeJSContext,
} from './scripts/three/initThree';
import IntroPopup from './IntroPopup';
import BackgroundLegend from './BackgroundLegend';

const Background = ({
  setPortFolioVisible,
  portFolioVisible,
}: {
  setPortFolioVisible: React.Dispatch<React.SetStateAction<boolean>>;
  portFolioVisible: boolean;
}) => {
  const bgElement = useRef(null);
  const bgWorld = useRef<ThreeJSContext>(null);
  const [loaded, setLoaded] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [introPopupLoaded, setIntroPopupLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    
  useEffect(() => {
    if (!bgElement.current) return;
    if (!bgWorld.current) {
      bgWorld.current = initThree('bgWorld', bgElement.current);
    }
    addBackground(bgWorld.current, setBackgroundLoaded);
  }, [bgElement, isIntro]);

  useEffect(() => {
    // Get rid of loading after 5sec even if loading not finished
    const timeout = setTimeout(() => {
      if (loaded) return;
      setLoaded(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [loaded]);

  useEffect(() => {
    if (loaded) return;
    console.log({ introPopupLoaded, backgroundLoaded });
    if (introPopupLoaded && backgroundLoaded) {
      setLoaded(true);
    }
  }, [introPopupLoaded, backgroundLoaded, loaded]);

  return (
    <>
      {!loaded && <Loading />}
      <div
        className="background"
        ref={bgElement}
        onClick={() => setPortFolioVisible((state: boolean) => !state)}
      ></div>
      <a href="#" target="_blank" className="event-cube-legend">
        <p className="title">
          <i className="fas fa-calendar-day"></i>
        </p>
        <p className="date">
          <i className="fas fa-clock"></i>
        </p>
        <p className="place">
          <i className="fas fa-map-marker-alt"></i>
        </p>
      </a>
      { !isIntro && !portFolioVisible && <BackgroundLegend /> }
      {window.innerWidth >= 1100 ? (
        <IntroPopup
          setIntroPopupLoaded={setIntroPopupLoaded}
          setPortFolioVisible={setPortFolioVisible}
          portFolioVisible={portFolioVisible}
          setIsIntro={setIsIntro}
        />
      ) : null}
    </>
  );
};

export default Background;
