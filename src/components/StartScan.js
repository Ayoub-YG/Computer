import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function StartScan() {
  return (

    <div className='text-white'>
      <Navbar />
      <div className='flex mt-48 items-center flex-col h-screen'>
        <div className='descriptionStart text-center'>
          <h3 className='desc'>This test will allow you to check the state of
            your computer</h3>
            <br></br>
          <h1 className='text-green-500'> Run scan to start  !</h1>
        </div>
        <button className='text-white btn-Start hover:text-gray-300'><Link to="/scanHome">START</Link></button>
      </div>
    </div>
  )
}

export default StartScan