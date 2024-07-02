import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ServiceSection from './components/service/ServiceSection'

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="py-16"><ServiceSection/></div>
    </>
  )
}

export default Services