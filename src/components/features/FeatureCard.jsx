import React from 'react'

const FeatureCard = ({feature,feature_image}) => {
  return (
    <>
      <div className="text-center">
      
       <div className="flex items-center justify-center mb-6">
          <div className=" p-4 m-3 sm:h-48 h-32 flex justify-center items-center bg-blue-200 bg-opacity-50 text-blue-700 rounded-3xl ">
              <img className='sm:aspect-video aspect-square rounded-3xl h-full' src={feature_image} alt="feature" />
          </div>
        </div>
        <h4 className="font-semibold h-12 text-lg sm:text-2xl text-gray-900 mb-6">{feature}</h4>
      
        <p className="font-light text-gray-500 hidden sm:block text-md sm:text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum?</p>
        <div className="flex justify-center">
              <a href="#" className="flex items-center gap-5 sm:px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-blue-700 transition ease-linear duration-500">
                  Learn more
                  <i data-feather="chevron-right"></i>
              </a>
          </div>
      </div>
      </>
  )
}

export default FeatureCard