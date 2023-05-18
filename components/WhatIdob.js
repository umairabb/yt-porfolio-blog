import React from 'react'
import Heading from './Heading'
import {SiWebflow} from 'react-icons/si'
import {TfiThemifyLogo} from 'react-icons/tfi'

const WhatIdob = () => {
  return (
   <section className='container mx-auto py-10 px-4'>
        <Heading title="I'm ExPert"/>

   <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

    <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-slate-300 '>

      <SiWebflow className='text-[40px]'/>
      <h2 className='font-bold text-[20px]'>Web Designer</h2>
      <p>I'm creating as a Professiinal web designs and Single page designs are websites that convey all of their information on a single webpage, Static website, Dynamic website, Responsive design, blog design, Porfolio etc.</p>
    </div>

    <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-slate-300 '>

<SiWebflow className='text-[40px]'/>
<h2 className='font-bold text-[20px]'>Web Developer</h2>
<p>I'm working on three types of web development roles:as developers who specialize in the user interface (“front-end”), those who write the underlying code for running all website operations (“back-end”), and those who manage all aspects of a website (“full stack”).</p>
</div>

<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-slate-300 '>

      <SiWebflow className='text-[40px]'/>
      <h2 className='font-bold text-[20px]'>UI/UX</h2>
      <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product. While a UX Designer decides how the user interface works, the UI designer decides how the user interface looks. This article is a comprehensive guide on how to become a UI UX Designer and discusses other relevant topics related to the UI UX field.</p>
    </div>





   </div>
        
   </section>
  )
}

export default WhatIdob