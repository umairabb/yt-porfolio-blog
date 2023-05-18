import React from 'react'
import Heading from './Heading'
import { FcBusinessman } from 'react-icons/fc'
import { FiBookOpen } from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {TbPacman} from 'react-icons/tb'
import { IoLocationOutline} from 'react-icons/io5'
import Button from './Button'

const About = () => {
  return (
   <section className='container mx-auto py-10 px-4'>
    <Heading title="About Me"/>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'><div>
      <img className='w-[400px] h-[500px]' src="/assets/umair.jpg" alt="" />
    </div>
 
  <div>
    <div className='flex items-center justify-between py-6 w-[300px] '>
    <div className='flex flex-col gap-6'>
      <div className='flex gap-4 items-center font-medium'>
        <FiBookOpen className='text-purple-600 text-[22px]'/>
        Education
      </div>
    
      <div className='flex gap-4 items-center font-medium'>
        <FcBusinessman className='text-purple-600 text-[22px]'/>
        Profession
      </div>

      <div className='flex gap-4 items-center font-medium'>
        <AiOutlineMail className='text-purple-600 text-[22px]'/>
        Email
      </div>

      <div className='flex gap-4 items-center font-medium'>
        <TbPacman className='text-purple-600 text-[22px]'/>
        Interest
      </div>

      <div className='flex gap-4 items-center font-medium'>
        <IoLocationOutline className='text-purple-600 text-[22px]'/>
        location
      </div>

      </div>
      
    <div className='flex flex-col gap-6 text-gray-600'>
      <div>:</div>
      <div>:</div>
      <div>:</div>
      <div>:</div>
      <div>:</div>
    </div>

    <div className='flex flex-col gap-6 text-gray-600'>
      <div>University of Karachi</div>
      <div>FullStack Developer </div>
      <div>abbasiwer9@gmail.com</div>
      <div> BlockChain & AI</div>
      <div>03132351410</div>
    </div>
    </div> 

      <div className='max-w-[800px]'>
        <h2 className='font-bold mt-10 mb-10'>I'm Umair Abbasi and FullStack Developer</h2>
        <p className='text-gray-700'>Hello! My name is Umair Abbasi. I am web developer, and I'm passionate and dedicate to my work. With 2 year experience as a professional, and In the Future I'm going in next level to start working in BlockChain and Artificial Intelligence.</p>
        <Button link="#" text="Hire Me"/>
      </div>
  </div>
    
    </div>
   </section>
  )
}

export default About