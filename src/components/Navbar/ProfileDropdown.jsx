import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ProfileDropdown = () => {

    const [openProfile, setopenProfile] = useState(false)
    const toggleDropdownmenu=()=>{
        setopenProfile((prev)=>!prev)
    }

    const ProfileDropdownMenu = () => {
        return (
          <div className= {`absolute right-20 z-10 mt-8  w-36 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out ${openProfile?' opacity-100 scale-100':'opacity-0 scale-95'}`}>
              <div className="px-1">
                <Link to="/sign-in" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-900 hover:text-white hover:rounded-md " role="menuitem"  id="user-menu-item-0">Your Profile</Link> 
              </div>
              <div className="px-1">
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700  hover:bg-blue-900 hover:text-white hover:rounded-md " role="menuitem"  id="user-menu-item-2">Sign out</Link>
              </div>
          </div>
        )
      }


  return (
        <><div className='flex'>
          <button type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none" id="user-menu-button" onClick={toggleDropdownmenu}>
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' alt="ProfilePicutre" />
          </button>
      <ProfileDropdownMenu />
      </div></>
    )
}

export default ProfileDropdown