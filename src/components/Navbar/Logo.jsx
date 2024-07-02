import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'

const Logo = () => {
  return (
    <>
        <div className="flex items-center flex-shrink-0">
          <Link to="/" ><img className="h-7 z-50" src={logo} alt="MyHeathAdvisor.com" /></Link>
        </div>
    </>
  )
}

export default Logo