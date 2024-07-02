import React from 'react'
import Logo from './Logo'
import NavbarLinksLaptop from './NavbarLinksLaptop'
import Notification from './Notification'
import ProfileDropdown from './ProfileDropdown'
import UserDetails from './UserDetails'


const LaptopNavbar = () => {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:block">
      <div className="flex h-16 items-center justify-between ">
        <div className="flex items-center">
            <div className="hidden md:block">
              <Logo/>
            </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavbarLinksLaptop/>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className=" flex ml-4 items-center md:ml-6">
            <Notification/>
            <ProfileDropdown/>
            <UserDetails/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LaptopNavbar