import React from 'react'
import img from '../asserts/Img-PC.png'
import start from '../asserts/start.png'
function Content() {
  return (
    <div className='mt-20 flex justify-between tache-btn pb-12'>
      <div className=' ml-4 description '>
        <h1 className='title text-white'> search, find, and sell <span className='words'>extraordinary</span> Computer</h1>
        <p className='text-white mt-7 description2'>Get the right features for your computer & Evalute the condition of computer by</p>
        <div className='flex mt-12 ml-9 btns'>
          <button className='btn-search hover:text-gray-300  '>Search</button>
          <div className='ml-24 flex btns'>
             <span className='option'><img src={start} alt='hh'></img></span>
            <button className='px-4 py-3 rounded text-white hover:text-gray-300 '>Run Scan</button>
          </div>
        </div>
      </div>
      <div className='IMG '>
        <div className='hii'><img  src={img}></img></div>
      </div>
    </div>
  )
}

export default Content