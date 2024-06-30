'use client'
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import styles from './skill.module.css'
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Skill() {
  return (
   <div>
      <div className='text-3xl font-extrabold mt-[50px] drop-shadow-xl justify-center flex mb-5'><BsStars size={35} /> &nbsp;My Skills</div>
     <div className=' flex flex-wrap'>
        {/* <FaHtml5 size={35}/>
                <FaCss3Alt size={35} />
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/>
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaLaravel size={35}/> */}
        
        <div className='sm:w-full md:w-1/3 p-5'>
            <div className="font-extrathin text-xl">Frontend Technologies</div>
            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex  items-center'><FaHtml5 size={35}/>&nbsp;HTML</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>80%</span>
            <div className={`${styles.range}`}>
                <div className='w-4/5 h-full bg-orange-400'></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><FaCss3Alt size={35} />&nbsp;CSS</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>83%</span>
            <div className={`${styles.range}`}>
                <div className='w-5/6 h-full bg-orange-400'></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><IoLogoJavascript size={35}/> &nbsp; Javascript</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>75%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"75%"}}></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><FaReact size={35}/>        &nbsp; React</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>70%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"70%"}}></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><RiNextjsFill size={35} />        &nbsp; Next.js</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>68%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"68%"}}></div>
            </div>
            </div>
            </div>
            
        </div>
        
        <div className='sm:w-full md:w-1/3 p-5'>
            <div className="font-extrathin text-xl">Backend Technologies</div>
            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex  items-center'><FaPhp size={35} />&nbsp;PHP</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>80%</span>
            <div className={`${styles.range}`}>
                <div className='w-4/5 h-full bg-orange-400'></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><FaLaravel size={35}/>&nbsp;Laravel</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>80%</span>
            <div className={`${styles.range}`}>
                <div className='w-4/5 h-full bg-orange-400'></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><FaNodeJs  size={35}/> &nbsp; Node.js</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>60%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"60%"}}></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><SiExpress  size={35}/>        &nbsp; Express.js</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>45%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"45%"}}></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><SiSpring  size={35} />        &nbsp; Java Spring</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>40%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"40%"}}></div>
            </div>
            </div>
            </div>
            
        </div>

        <div className='sm:w-full md:w-1/3 p-5'>
            <div className="font-extrathin text-xl">Other Technologies</div>
            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex  items-center'><FaGithub size={35}/>&nbsp;Github</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>80%</span>
            <div className={`${styles.range}`}>
                <div className='w-4/5 h-full bg-orange-400'></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><SiMysql  size={35} />&nbsp;MySql</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>83%</span>
            <div className={`${styles.range}`}>
                <div className='w-5/6 h-full bg-orange-400'></div>
            </div>
            </div>
            </div>

            <div className={`${styles.skill} shadow-xl mt-5`}>
            <div className='flex items-center'><SiMongodb  size={35}/> &nbsp; MongoDB</div>
            <div className="flex justify-center items-center">
            <span className='text-sm'>50%</span>
            <div className={`${styles.range}`}>
                <div className=' h-full bg-orange-400' style={{width:"50%"}}></div>
            </div>
            </div>
            </div>
            
        </div>
    </div>
   </div>
  )
}

export default Skill