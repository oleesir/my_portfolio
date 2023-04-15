import {TfiLinkedin, TfiTwitterAlt} from "react-icons/tfi";
import {ImGithub} from "react-icons/im";
import {SiGmail} from "react-icons/si";
import React from "react";


const Main = () =>{
   return(
       <div id="home" className="w-full h-screen bg-[#fff]">
           <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
               <div className="text-center">
                   <p className="md:text-5xl md:py-4 font-extrabold text-3xl py-2">Hi, I&apos;m <span className="md:text-5xl text-[#002a2e] text-3xl">Olisa</span></p>
                   <p className="md:text-5xl md:py-4 font-extrabold text-3xl py-2">
                       A Frontend Web Developer
                   </p>
                   <p className="md:text-xl py-3 text-base">
                      I like finding solutions and determining customer satisfaction.
                   </p>
                   <div className="flex items-center justify-between w-[250px] my-4 m-auto">
                       <TfiLinkedin size={25}/>
                       <TfiTwitterAlt size={25}/>
                       <ImGithub size={25}/>
                       <SiGmail size={25}/>
                   </div>
               </div>
           </div>
       </div>
   )
}

export default Main;