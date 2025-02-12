import { useEffect } from 'react'
import './App.css'
import Background from './Background';
import { talkToDevs } from './utils/talkToDevs';
import Portfolio from './Portfolio';



function App() {

  useEffect(() => {
    talkToDevs();
  }, []);

  return (
    <>
      <Background/>
      <Portfolio />
    </>
  )
}

export default App
