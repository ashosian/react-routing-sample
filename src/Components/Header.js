import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex '>
      <NavLink className="p-4" to='/'><h1>home</h1></NavLink>
      <NavLink className="p-4" to='/about'><h1>about</h1></NavLink>
      <NavLink className="p-4" to='/contact'><h1>contact</h1></NavLink>
    </header>
  )
}

export default Header
