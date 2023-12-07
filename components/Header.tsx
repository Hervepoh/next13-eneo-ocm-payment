import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex justify-between p-4 shadow-sm z-20'>
        <Logo />
        <Nav />
    </div>
  )
}

export default Header