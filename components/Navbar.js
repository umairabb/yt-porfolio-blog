import React from 'react'
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'
import {IoLogoCodepen} from 'react-icons/io5'
import { useState } from 'react'
import {GrClose} from "react-icons/gr"

const Navbar = () => {
  const [open, setOpen] = useState(false)

 
  return (
    <div className='bg-white block top-0 w-[100%] sticky z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-4'>
            <div className='flex text-[24px] text-center font-bold'>U<IoLogoCodepen className='mt-0.5' size={30}/>A</div>

            <div className='hidden md:flex font-semibold gap-6'>
              <Link href="/"><span className='hover:text-purple-600'>Home</span></Link>

              <Link href="/"><span className='hover:text-purple-600'>About</span></Link>

              <Link href="/"><span className='hover:text-purple-600'>Porfolio</span></Link>

              <Link href="/"><span className='hover:text-purple-600'>Blog</span></Link>

              <Link href="/"><span className='hover:text-purple-600'>Contact</span></Link>

            </div>           

      {
        open ? (
          <GrClose onClick={()=>setOpen(!open)} size={25} className='md:hidden block'/>
        ): (
          <FiMenu onClick={()=>setOpen(!open)} size={25} className='md:hidden block'/>
        )
      }

      <div className={`duration-300 md:hidden flex flex-col gap-3 w-[80%] h-screen px-6 text-xl fixed bg-slate-500 text-white capitalize top-[68px] py-6 ${open ? `left-[0]` : `left-[-100%]`}`}>

      <Link href="/"><span className='hover:text-purple-600'>Home</span></Link>

      <Link href="/"><span className='hover:text-purple-600'>About</span></Link>

      <Link href="/"><span className='hover:text-purple-600'>Porfolio</span></Link>

      <Link href="/"><span className='hover:text-purple-600'>Blog</span></Link>

      <Link href="/"><span className='hover:text-purple-600'>Contact</span></Link>
            </div>
      
        </div>
       
    </div>
  )
}

export default Navbar