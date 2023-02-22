import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '../constantes'

function Navbar() {
  return (
    <nav className='flex justify-between top-0 left-0 mt-2 pt-4 md:mr-52 mr-32 ml-4  '>
      <div className='color-logo text-4xl'>computer</div>
        <ul>
          {NavLinks.map(navLink => (
            <Link to='/pepsi' className='' key={navLink.id}>{navLink.title}</Link>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar