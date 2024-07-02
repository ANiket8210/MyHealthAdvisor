import React from 'react'
import {NavLink } from 'react-router-dom'
 
 const NavbarLinksLaptop = () => {
  const active="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
  const inactive = "text-gray-300 hover:bg-slate-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  const css=(e)=>{
    return e.isActive?active:inactive
  }
   return (
      <>
      <NavLink to="/" className={css} aria-current="page">Dashboard</NavLink>
      <NavLink to="/services" className={css}>Services</NavLink>
      <NavLink to="/operation_centers" className={css}>Operation Centers</NavLink>
      <NavLink to="/contact_us" className={css}>Contact us</NavLink>
      </>                    
   )
 }
 
 export default NavbarLinksLaptop