import { useEffect } from 'react'
import './App.css'
import Background from './Background';
import { talkToDevs } from './utils/talkToDevs';

function App() {

  useEffect(() => {
    talkToDevs();
  }, []);

  return (
    <>
      <Background />
    </>
  )
}

export default App
