import React from 'react'
import Heading from './Heading'

const Skill = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Heading title="Skills"/>

        <p className='text-gray-700 -mt-10 mb-10'>Our Skills see below I'm in expert in this programs given in the below: These Programs in high demand on Industry as a Developer I know.</p>

   <div className='grid grid-cols-1 md:grid-cols-2 gap-6 font-semibold text-2xl'>
        <div>React js</div>
        <div>Next js</div>
        <div>JavaScipt js</div>
        <div>Node js</div>
        <div>Tailwind Css</div>
        <div>WordPress</div>
        <div>Redux</div>
        <div>GraphQl</div>
        <div>MongoDb</div>

   </div>

    </section>
    
  )
}

export default Skill