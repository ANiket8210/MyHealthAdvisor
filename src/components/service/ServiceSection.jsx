import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4">

        <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">Our Services</h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ServiceCard serviceName="Nearby Hospitals" image={"/map.jpeg"} btn="Look up Now"/>
        <ServiceCard serviceName="AI Disease Diagnosis" image={"/AI_diagnosis.webp"} btn="Check Now"/>
        <ServiceCard serviceName="Book an  appointment" image={"/appointment.jpeg"} btn="Book Now"/>
        </div>
    </div>
  )
}

export default ServiceSection