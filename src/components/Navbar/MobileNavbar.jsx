import React, { useState } from 'react'
import NavbarLinksMobile  from './NavbarLinksMobile'
import Notification from './Notification'
import UserDetails from './UserDetails'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import MobileMenuButton from './MobileMenuButton'
import Logo from './Logo'
const MobileNavbar = () => {

  const [OpenProfile , setOpenProfile ] = useState(false)
  const [OpenMenu , setOpenMenu ] = useState(false)
  const toggleDropdown=()=>{
    setOpenProfile((OpenProfile)=>!OpenProfile)
  }
  const toggleMenu=()=>{
    setOpenMenu((OpenMenu)=>!OpenMenu)
  }
  return (
    <>
      <div className="mx-4 md:hidden pt-3 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <MobileMenuButton toggleMobileMenu={toggleMenu}/>
            <Logo />
          </div>
          <div className="space-y-1 px-2 pb-3  sm:px-3" id="mobile-menu-dropdown">
            <NavbarLinksMobile openMenu={OpenMenu}/>
          </div>
        </div>
        <div className="md:hidden" id="mobile-menu">
            <div className="flex items-center px-5 ">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Profile Pic" onClick={toggleDropdown} />
              </div>
              <UserDetails />
              <Notification />
            </div>
            <ProfileDropdownMenu OpenPfp={OpenProfile} />
        </div>
      </div>
    </>
  )
}

export default MobileNavbar