import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
function Home() {
  return (
    <div className='theDivHome'>
    <div className='theHome-wrapper'>
    <div className='countainer-of-home'>
      <Navbar/>
      <Content/>
  </div>
  </div>
  </div>
  )
}

export default Home