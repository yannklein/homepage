import { useEffect, useState } from 'react'
import './App.css'
import Background from './Background';
import { talkToDevs } from './utils/talkToDevs';
import Portfolio from './Portfolio';



function App() {
  const [portFolioVisible, setPortFolioVisible] = useState(false);

  useEffect(() => {
    talkToDevs();
  }, []);

  useEffect(() => {
    document.body.style.overflow = !portFolioVisible ? "hidden" : "auto";
  }, [portFolioVisible]);

  return (
    <>
      <Background setPortFolioVisible={setPortFolioVisible} portFolioVisible={portFolioVisible}/>
      <Portfolio portFolioVisible={portFolioVisible}/>
    </>
  )
}

export default App
