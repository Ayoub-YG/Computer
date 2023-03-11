import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function EndOfScreenScan() {
  return (
    <div className='end-screen text-white'>
      <Navbar />
      <button className=''></button>
      <div className='flex mt-32 items-center flex-col h-screen'>
        <h1 className='text-center descES'>The <span className='text-green-500 '>Screen Test </span> Has Been Completed</h1>
        <div className='flex mt-10'>
          <button className='mx-auto mr-16 btnFin '><Link to='/startScan'>restart</Link></button>
          <button className='mx-auto mr-16 btnFin '><Link to='/KeyboardTest'>next</Link></button>
        </div>
      </div>
    </div>
  )
}

export default EndOfScreenScan;