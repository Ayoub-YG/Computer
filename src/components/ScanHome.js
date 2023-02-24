import React, { useState, useEffect } from 'react';
import FullScreen from './FullScreen';

function ScanHome() {
  const [remainingTime, setRemainingTime] = useState(5);
  const [ableTo,setAbleTo] = useState(false);

  
  document.body.requestFullscreen();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime === 0) {
        clearInterval(intervalId);
        setAbleTo(!ableTo)
      } else {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [remainingTime]);
if (ableTo) {return (<FullScreen/>)} 
  else return (
    <div className='theScranHome'>
     {remainingTime}
<h3>This test depends on your attention so that the colors will help you detect if there are defects in the screen, so keep your eyes on the screen</h3>
    </div>
  );
}


export default ScanHome;