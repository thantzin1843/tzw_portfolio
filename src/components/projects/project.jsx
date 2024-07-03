'use client'
import Image from 'next/image';
import React from 'react'
import styles from './project.module.css'
import { BsStars } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { SiLivewire } from "react-icons/si";
import { SiAlpinedotjs } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {motion} from 'framer-motion'
function Project() {
  return (
    <div className='overflow-hidden' id='projects'>
        <motion.div
        variants={{
            hidden:{opacity:0,x:30},
            visible:{opacity:1,x:0}
        }}
        transition={{ duration: 0.5 }}
         initial="hidden"
          whileInView="visible"
        className='text-3xl font-extrabold md:mt-[50px] sm:mt-[20px] drop-shadow-xl justify-center flex mb-5'><BsStars size={35} /> &nbsp; Projects</motion.div>
    
        {/* projeect card */}
        <div className='w-full flex gap-10 flex-wrap justify-center overflow-hidden'>


        <motion.div 
        variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1,x:0}
        }}
        transition={{ duration: 0.5 }}
         initial="hidden"
          whileInView="visible"

        className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/movie.jfif" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 flex flex-col gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <div className='text-orange-400 text-sm bg-black text-center p-2'>Movie App</div>
                <Link className='border  p-1' href='https://github.com/thantzin1843'><FaGithubSquare  className='text-orange-400 bg-black'/></Link>

            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaReact size={35}/>
                <RiTailwindCssFill size={35}/>
            </div>
        </motion.div>

        <motion.div 
        variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1,x:0}
        }}
        transition={{ duration: 0.5 }}
         initial="hidden"
          whileInView="visible"
        className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/ecommerce.jfif" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 flex flex-col gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <div className='text-orange-400 text-sm bg-black text-center p-2'>Ecommerce App</div>
                <Link className='border  p-1' href='https://github.com/thantzin1843'><FaGithubSquare  className='text-orange-400 bg-black'/></Link>

            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaPhp size={35}/>
                <FaLaravel size={35}/>
                <DiJqueryLogo size={35}/>
                <SiMysql size={35}/>
                <FaBootstrap size={35}/>
            </div>
        </motion.div>

        <motion.div 
        variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1,x:0}
        }}
        transition={{ duration: 0.5 }}
         initial="hidden"
          whileInView="visible"
        className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/evercare.jfif" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 flex flex-col gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <div className='text-orange-400 text-sm bg-black text-center p-2'>Clinic Management System</div>
                <Link className='border  p-1' href='https://github.com/thantzin1843'><FaGithubSquare  className='text-orange-400 bg-black'/></Link>

            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <SiLivewire size={35}/>
                <SiAlpinedotjs size={35}/>
                <FaBootstrap size={35}/>
            </div>
        </motion.div>  

        <motion.div 
        variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1,x:0}
        }}
        transition={{ duration: 0.5 }}
         initial="hidden"
          whileInView="visible"
         className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/r.jfif" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 flex flex-col gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <div className='text-orange-400 text-sm bg-black text-center p-2'>Online Learning System</div>
                <Link className='border  p-1' href='https://github.com/thantzin1843'><FaGithubSquare  className='text-orange-400 bg-black'/></Link>

            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaBootstrap size={35}/>
            </div>
        </motion.div>

        <motion.div 
        variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1,x:0}
        }}
        transition={{ duration: 0.5 }}
         initial="hidden"
          whileInView="visible"
         className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/blog.png" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 flex flex-col gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <div className='text-orange-400 text-sm bg-black text-center p-2'>Blog App</div>
                <Link className='border  p-1' href='https://github.com/thantzin1843'><FaGithubSquare  className='text-orange-400 bg-black'/></Link>

            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <RiNextjsFill size={35}/>
                <RiTailwindCssFill size={35}/>
                <SiMongodb size={35}/>
                <SiPrisma size={35}/>
            </div>
        </motion.div>
       
        
        </div>
    
    </div>
  )
}

export default Project