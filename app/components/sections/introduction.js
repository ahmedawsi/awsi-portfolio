import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Introduction = () => {
    const imagesPath = "/media/";
    
  return (
    <div id="home" className="h-screen min-w-screen" style={{position: "relative"}}>
        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full gap-3 backdrop-blur-sm">
          <p className="text-5xl text-center opacity-90">Ahmed Awsi</p>
          <p className="px-6 text-center opacity-70">
            B.Sc. in CS & IT | Software developer & UI/UX designer
          </p>
          <p className="px-6 text-center opacity-70">
            . . .
          </p>
        </div>
        <div className="z-40 flex flex-col bottom-[-80px] w-full h-fit absolute justify-center">
        <Link className="self-center p-5 opacity-70" href="/#mywork">View My Work</Link>
          <div className="flex self-center -translate-x-[3.75px]">
            <div className="absolute w-[7px] h-[7px] rounded-full bg-gray-50" />
            <div className="absolute w-[7px] h-[7px] rounded-full bg-gray-50 animate-ping " />
          </div>
          <div className="w-[1.5px] h-[185px] bg-gray-400 self-center" />
        </div>

        <Image
          src={imagesPath + "Ahmed.JPG"}
          className="z-0 object-cover w-full h-full opacity-20"
          alt="A photo of Ahmed"
          fill="true"
          priority="true"
        />
      </div>
  )
}

export default Introduction