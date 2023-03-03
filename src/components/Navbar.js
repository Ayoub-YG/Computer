import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '../constantes'

function Navbar() {
  return (
    <nav className='flex justify-between mt-10 '>
      <div className='color-logo text-4xl'>S&S</div>
        <ul className='mr-52 md:mr-96'>
          {NavLinks.map(navLink => (
            <Link to={`/${navLink.id}`} className='LiNavbar' key={navLink.id}>{navLink.title}</Link>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar