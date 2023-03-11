import React from 'react'
import img from '../asserts/Img-PC.png'
import start from '../asserts/start.png'
import { Link } from 'react-router-dom'
function Content() {


  return (
    <div className='mt-20 flex justify-between tache-btn pb-12 md:pb-32'>
      <div className=' ml-4 description '>
        <h1 className='title text-white'> search, find, and sell <span className='words'>extraordinary</span> Computer</h1>
        <p className='text-white my-14 description2'>Get the right features for your computer & Evalute the condition of computer by</p>
        <div className='flex btns mt-16'>
          <button className='btn-search hover:text-gray-300  '>Search</button>
          <div className='ml-16 flex btns '>
             <Link to='/startScan' className='mr-5' ><img className='' src={start} alt='Wrong Path'></img></Link>
              <button className=' rounded text-white hover:text-gray-300 ' onClick={(event) => event.preventDefault()} ><Link to='/startScan'>Run Scan </Link></button>
          </div>
        </div>
      </div>
      <div className='IMG '>
        <div className='image-repres'><img  src={img} alt='Wrong Path'></img></div>
      </div>
    </div>
  )
}

export default Content