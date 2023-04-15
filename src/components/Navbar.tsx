import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";




const Navbar =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#fff');
    const [linkColor, setLinkColor] = useState('#1f2937');

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    const handleNav = () => {
        setIsOpen(!isOpen)
    }
    return(
      <div  className={shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#fff]'
          : 'fixed w-full h-20 z-[100]'}>
          <div className="flex justify-between h-full w-full items-center px-10">
              <p className="text-3xl font-['Fasthand']">Olisaemodi</p>
          <div>
              <ul className="hidden md:flex">

                      <li className='ml-10 text-sm border-b-2 border-transparent uppercase pb-2 hover:border-b-2 hover:border-[#002a2e] hover:pb-2'>
                          <Link href={"/"}>Home</Link>
                      </li>

                      <li className='ml-10 text-sm border-b-2 border-transparent uppercase pb-2 hover:border-b-2 hover:border-[#002a2e] hover:pb-2'>
                          <Link href="/#about"> About</Link>
                      </li>

                      <li className='ml-10 text-sm border-b-2 border-transparent uppercase pb-2 hover:border-b-2 hover:border-[#002a2e] hover:pb-2'>
                          <Link href={"/#skills"}>Skills </Link>
                      </li>


                      <li className='ml-10 text-sm border-b-2 border-transparent uppercase pb-2 hover:border-b-2 hover:border-[#002a2e] hover:pb-2'>
                          <Link href={"/#projects"}>Projects</Link>
                      </li>


                      <li className='ml-10 text-sm border-b-2 border-transparent uppercase pb-2 hover:border-b-2 hover:border-[#002a2e] hover:pb-2'>
                          <Link href={"/#contact"}>Contact</Link>
                      </li>

             </ul>
              <div className="md:hidden" onClick={handleNav}  style={{ color: `${linkColor}` }}>
                  <RiMenu3Fill fontSize={25}/>
              </div>
          </div>

          </div>

          <div className={isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
             <div className={isOpen ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FFF] p-10 ease-in duration-500" :
                  'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                 <div className="w-full flex justify-between items-center">
                     <p className="text-3xl font-['Fasthand']">Olisaemodi</p>
                     <div className="cursor-pointer"  onClick={handleNav}>
                         <CgClose fontSize={25}/>
                     </div>
                 </div>
                 <div className="py-4 flex flex-col">
                     <ul>
                         <Link href={"/"}>
                             <li className="py-4 text-sm" onClick={()=> setIsOpen(false)}>Home</li>
                         </Link>
                         <Link href={"/#about"}>
                             <li className="py-4 text-sm" onClick={()=> setIsOpen(false)}>About</li>
                         </Link>
                         <Link href={"/#skills"}>
                             <li className="py-4 text-sm" onClick={()=> setIsOpen(false)}>Skills</li>
                         </Link>
                         <Link href={"/#projects"}>
                             <li className="py-4 text-sm" onClick={()=> setIsOpen(false)}>Projects</li>
                         </Link>
                         <Link href={"/#contact"}>
                             <li className="py-4 text-sm" onClick={()=> setIsOpen(false)}>Contact</li>
                         </Link>
                     </ul>
                     <div className="pt-40">
                        <p className="uppercase">Get in touch</p>
                     </div>
                     <div className="flex items-center justify-between w-[80%] my-4">
                         <TfiLinkedin/>
                         <TfiTwitterAlt/>
                         <ImGithub/>
                         <SiGmail/>
                     </div>
                 </div>
             </div>
          </div>

      </div>
  )
}

export default Navbar;