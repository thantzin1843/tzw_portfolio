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
function Project() {
  return (
    <div className=''>
        <div className='text-3xl font-extrabold mt-[50px] drop-shadow-xl justify-center flex mb-5'><BsStars size={35} /> &nbsp; projects</div>
    
        {/* projeect card */}
        <div className='w-full flex gap-10 flex-wrap justify-center'>


        <div className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/project.png" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <button className='border  p-1'><IoEyeSharp /></button>
                <button className='border  p-1'><FaGithubSquare /></button>
                
            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
            </div>
        </div>

        <div className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/project.png" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <button className='border  p-1'><IoEyeSharp /></button>
                <button className='border  p-1'><FaGithubSquare /></button>
                
            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
            </div>
        </div>

        <div className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/project.png" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <button className='border  p-1'><IoEyeSharp /></button>
                <button className='border  p-1'><FaGithubSquare /></button>
                
            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
            </div>
        </div>  

        <div className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/project.png" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <button className='border  p-1'><IoEyeSharp /></button>
                <button className='border  p-1'><FaGithubSquare /></button>
                
            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
            </div>
        </div>

        <div className='md:w-1/4 sm:w-full flex flex-col justify-center items-center' style={{border:'2px solid var(--textColor)'}}>
           <div className={`w-full h-[250px] relative ${styles.img}`}>
            <img src="/project.png" className={`w-full h-full `} alt=""  />
            <div className={`absolute opacity-0 gap-5 justify-center items-center text-3xl top-0 right-0 bg-black/20 text-black w-full h-full ${styles.detail}`}>
                <button className='border  p-1'><IoEyeSharp /></button>
                <button className='border  p-1'><FaGithubSquare /></button>
                
            </div>
           </div>

            <div className='flex flex-wrap gap-2 m-2 p-3 justify-center' style={{border:'2px solid var(--textColor)'}}>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
            </div>
        </div>

       
        
        </div>
    
    </div>
  )
}

export default Project