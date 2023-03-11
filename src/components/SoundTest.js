import React from 'react'
import { Link } from 'react-router-dom'
import vibration from '../asserts/vibration.png'
import left from '../asserts/playLeft.png'
import right from '../asserts/playRight.png'
import rightTester from '../asserts/theRightTester.m4a';
import leftTester from '../asserts/theLeftTester.m4a';


function SoundTest() {
  const playRone = () => {
    new Audio(rightTester).play()
  }
  const playLone = () => {
    new Audio(leftTester).play()
  }
  return (

    <div className='text-white '>
      <div className='logo text-4xl mt-10'>S&S</div>
      <h1 className='text-center mt-24 text-3xl'>Sound Test</h1>
      <div className='flex justify-center my-16'>
        <div className='Micro'><button onClick={playLone}><img src={left} alt="" /></button></div>
        <img className='mx-14' src={vibration} alt="wrong path" />
        <div className='Micro'><button onClick={playRone}><img src={right} alt="" /></button></div>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <h2>Click the <span className='text-green-500'>left</span>  and <span className='text-green-500'>right </span>arrow button to test sound</h2>
        <button className='btnFin mt-9'><Link to='/cameraTest'>next</Link></button>
      </div>
    </div>
  )
}

export default SoundTest