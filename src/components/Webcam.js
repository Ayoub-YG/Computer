import React, { useState, useEffect, useRef } from 'react';
import videoCall from '../asserts/videoCall.png'

function Webcam() {
  const [isSreaming,setIsStreaming] = useState(false)
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const getWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
      } catch (error) {
        console.log(error);
      }
    };

    getWebcam();
  }, []);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  }, [stream]);

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsStreaming(true);
    }
  };

  return (
    <div>
      <div className='logo text-4xl mt-2'>S&S</div>
    <div className='flex justify-center items-center flex-col h-screen  '>
      ( {isSreaming ? <div className='hiddenCamera'>YOU ARE SO BEATIFUL ! ✨</div> : <video ref={videoRef} />})
      <button className='text-white absolute bottom-40  w-16 h-16  camera' onClick={stopWebcam}><img src={videoCall} alt=''/></button>
      <button className='text-white mt-3 btnFin'>next</button>
    </div>
    </div>
  );
}

export default Webcam;