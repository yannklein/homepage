import { useEffect, useRef, useState } from 'react';
import './Background.css';
import Loading from './Loading';
import {
  initThree,
  addBackground,
} from './scripts/three/initThree';
import IntroPopup from './IntroPopup';

const Background = () => {
  const bgElement = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [introPopupLoaded, setIntroPopupLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  
  useEffect(() => {
    if (!bgElement.current) return;
    const bgWorld = initThree('backgroundWorld', bgElement.current);
    addBackground(bgElement.current, bgWorld, setBackgroundLoaded);
  }, [bgElement]);
  
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
      { !loaded && <Loading />}
      <div className="background" ref={bgElement}></div>
      <a
        href="#"
        target="_blank"
        className="event-cube-legend"
      >
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
      <div className="background-legend">
        <i className="fas fa-circle-notch"></i> each torus edge is one Github
        commit I did today |<i className="fas fa-space-shuttle"></i> shows my
        resident country |<i className="fas fa-circle"></i>
        <i className="fas fa-circle" style={{ fontSize: '10px' }}></i>
        <i className="fas fa-circle" style={{ fontSize: '8px' }}></i>
        shows the time in my current location |
        <i className="fas fa-square-full" style={{ fontSize: '6px' }}></i>
        <i className="fas fa-square-full"></i>
        <i className="fas fa-square-full" style={{ fontSize: '10px' }}></i>
        show the on-going event in Tokyo tech, hover over it
      </div>
      {window.innerWidth >= 1100 ? (
        <IntroPopup setIntroPopupLoaded={setIntroPopupLoaded} />
      ) : null}
    </>
  );
};

export default Background;
