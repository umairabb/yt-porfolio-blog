import About from "@/components/About"
import Button from "@/components/Button"
import Skill from "@/components/Skill"
import WhatIdob from "@/components/WhatIdob"
import Contact from "@/components/Contact"
import React from "react"
import Head from "next/head"
import Typewriter from "typewriter-effect"

export default function Home() {
  return (
    <div>
    <Head>
      <title>Blog-UA</title>
    </Head>
    <div className="bg-[url('/assets/back.jpg')] h-screen bg-cover bg-center bg-fixed flex items-center">
  <div className="container mx-auto px-4">
    <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
      <div className="">
        <h1 className="text-5xl"> I'm Umair Abbasi</h1>
        <h4 className="text-2xl mt-5">
          <Typewriter 
          options={{
            strings: [
              "FullStack Developer",
              "UI/UX Designer"
            ],
            changeDelay: 3,
            changeDelectspeed: 2,
            autoStart: true,
            loop: true,
          }}
          />
        </h4>
      </div>
      <div className="bg-purple-600 h-[2px] md:w-[220px] w-[180px]"></div>
      <div>
        <p> Our Proficiency in Web Development & Web Designs. In Professional context is often happens that private clients corder a publication to be made.</p>
        <Button link="#" text="Learn More"/>
      </div>
    </div>
  </div>
 </div>
 <main>
  <About />
  <WhatIdob/>
  <Skill />
  <Contact />
 </main>

 <footer>

 </footer>
 </div>

 

  )
}
