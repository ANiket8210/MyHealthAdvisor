import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureSection = () => {
  return (
    <>
        <section className="bg-white py-16 ">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10">Our features</h1>
            
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
            
                <FeatureCard feature="Newest Technology"  feature_image={"/latest_technology.jpg"}/>
                <FeatureCard feature="Experienced Doctors"  feature_image={"/Experienced_Doctors.jpg"}/>
                <FeatureCard feature="High Customer Satisfaction"  feature_image={"/customer_satisfaction.jpg"}/>
                <FeatureCard feature="Pharma Pipeline"  feature_image={"/pharma_pipeline.png"}/>
                <FeatureCard feature="Pharma Team"  feature_image={"/pharma_team.jpg"}/>
                <FeatureCard feature="High Quality Treatment"  feature_image={"/high_quality_treatment.png"}/>
                </div>
            </div>
        </section>
    </>
    )
}

export default FeatureSection