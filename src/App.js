import {useState, useEffect} from 'react';
import { Main } from './Main/Main';
import {MobileMain} from './MobileMain/MobileMain';

import './App.css';

const App = () => {

  const [isMobile, setIsMobile] = useState(false)
 

const handleResize = () => {
  if (window.screen.width < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}
useEffect(() => {
  window.addEventListener("resize", handleResize)
})
  return (
    <div>
      {isMobile ? <MobileMain /> : <Main />} 
    </div>
  )


}

export default App;
