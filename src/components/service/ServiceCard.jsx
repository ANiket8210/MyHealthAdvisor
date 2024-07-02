import React from 'react'

const ServiceCard = ({serviceName,image,btn}) => {
  return (
    <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl flex flex-col">
        <img src={image} alt="Service" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 rounded-xl h-48"/>

        <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">{serviceName}</h4>

        <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, laborum!</p>

        <button className="w-full py-4 bg-info font-semibold  text-lg rounded-xl hover:bg-blue-700  hover:text-white transition ease-in-out duration-500">{btn}</button>
    </div>
  )
}

export default ServiceCard