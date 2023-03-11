import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import IMG from '../asserts/Microphone.png';
import vector from '../asserts/Vector.png';
import playBack from '../asserts/PlayBack.png'


const MicroPhone = () => {
  // const [rec,setRec] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(mediaRecorder);

      mediaRecorder.addEventListener("dataavailable", event => {
        setAudioChunks([...audioChunks, event.data]);
      });
    });
  }, []);
  const handleStartRecording = () => {
    if (mediaRecorder) {
      setIsRecording(true);
      mediaRecorder.start();
    }
    console.log(isRecording);
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      setIsRecording(false);
      mediaRecorder.stop();
    }
    console.log(isRecording);
  };

  const handlePlayAudio = () => {
    if (audioChunks.length > 0) {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };
  const playAudio = document.querySelector('.play-audio');
  if (isRecording) {
    playAudio.classList.add('flex', 'flex-row');
    playAudio.classList.remove('hidden')
  }

  return (
    <div>
      <div className='logo text-4xl mt-5'>S&S</div>
      {/* <div>
      <button className="bg-red-600 text-white" onClick={}>
        Start Recording
      </button>
      <button className="bg-green-600 text-white" onClick={} disabled={!isRecording}>
        Stop Recording
      </button>
    </div> */}
      <div className='flex justify-center items-center h-screen flex-col '>
        {/* (${isRecording ? '<div>NOW U CAN HEAR YOUR RECROD ! </div>' : <div></div>}) */}
        <div className='Micro mb-7' onClick={handleStartRecording} disabled={isRecording}><button><img src={IMG} alt='' ></img></button></div>
        <div className='text-center text-white mt-7'><span className='text-green-400'>one click </span> is started record,  click in button<span className='text-green-400 '> Stop Recording </span>for stoped the record</div>
         <div className='hidden my-8 flex-row play-audio'>
         <div className="w-11 h-11 Micro1"><button><img src={playBack} alt='' className="" onClick={handlePlayAudio} disabled={audioChunks.length === 0}></img></button></div> 
          <img src={vector} alt=''></img>
        </div> 
        <div className="flex my-9 flex-row">
         { isRecording && <button className="text-white mr-5 btnFin" onClick={handleStopRecording} >
            Stop Recording
          </button>}
          <button className='text-white ml-5 btnFin'><Link to='/soundTest'>next</Link></button>
        </div>
      </div>
    </div>
  );
};

export default MicroPhone;
