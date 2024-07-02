import React from 'react'
import {  NavLink } from 'react-router-dom'

const NavbarLinksMobile = (props) => {

  const Show=props.openMenu?"block":"hidden";
  const active="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
  const inactive = "text-gray-300 hover:bg-slate-950 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
  const css=(e)=>{
    return e.isActive?active:inactive
  }
  return (
    <>
    <div className={`space-y-1 px-2 pb-3 pt-2 sm:px-3 ${Show}`}>
    <NavLink to="/" className={css} aria-current="page">Dashboard</NavLink>
    <NavLink to="/services" className={css}>Services</NavLink>
    <NavLink to="/operation_centers" className={css}>Opertion Centers</NavLink>
    <NavLink to="/contact_us" className={css}>Contact us</NavLink>
    </div>
    </>
  )
}

export default NavbarLinksMobile