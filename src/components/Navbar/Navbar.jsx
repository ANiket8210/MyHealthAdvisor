import React from 'react'
import LaptopNavbar from './LaptopNavbar'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-950 ">
        <LaptopNavbar />
        <MobileNavbar />
    </nav>
    </>
  )
}

export default Navbar