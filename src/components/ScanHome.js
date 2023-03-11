import React, { useState, useEffect } from 'react';
import FullScreen from './FullScreen';

function ScanHome() {
  const [remainingTime, setRemainingTime] = useState(5);
  const [ableTo, setAbleTo] = useState(false);


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
  if (ableTo) {  return (<FullScreen />) }
  else return (
    <div className='theScranHome'>
      <div className='ContainerOFScreen'>
        <h1 className='text-white'>The <span className=''>screen </span>Test</h1>
        <p className='text-white'>This test depends on your attention so that the colors
          Fwill help you detect if there are defects in the screen, so keep your eyes on the screen</p>
        <div className="spinner-container">
          <div className="spinner mt-20"></div>
          <div className="spinner-text absolute">{remainingTime}</div>
        </div>
      </div>
    </div>
  );
}


export default ScanHome;