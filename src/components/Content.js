import React from 'react'
import img from '../asserts/Img-PC.png'
import start from '../asserts/start.png'
import { Link } from 'react-router-dom'
function Content() {


  return (
    <div className='mt-20 flex justify-between tache-btn pb-12'>
      <div className=' ml-4 description '>
        <h1 className='title text-white'> search, find, and sell <span className='words'>extraordinary</span> Computer</h1>
        <p className='text-white mt-7 description2'>Get the right features for your computer & Evalute the condition of computer by</p>
        <div className='flex mt-12 ml-9 btns'>
          <button className='btn-search hover:text-gray-300  '>Search</button>
          <div className='ml-24 flex btns hover:text-red-300'>
             <span className='option'><Link to='/scanHome' ><img src={start} alt='Wrong Path'></img></Link></span>
            <button className=' rounded text-white hover:text-gray-300 ' onClick={(event) => event.preventDefault()} ><Link to='/scanHome'>Run Scan </Link> </button>
          </div>
        </div>
      </div>
      <div className='IMG '>
        <div className='hii'><img  src={img} alt='Wrong Path'></img></div>
      </div>
    </div>
  )
}

export default Content