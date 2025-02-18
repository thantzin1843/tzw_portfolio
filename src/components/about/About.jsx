'use client'
import React, { useEffect } from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Opacity from '../animation/Opacity'
import {motion} from 'framer-motion'
import { getMessages } from '@/utils/actions'
function About() {

  return (
    <div className='md:flex wrap min-h-lvh mt-[50px] overflow-hidden' id='about'>

      <motion.div 
        variants={{
          hidden:{opacity:0,x:-200},
          visible:{opacity:1,x:0}
      }}
      transition={{ duration: 1 }}
      initial="hidden"
        whileInView="visible"

      className='md:w-1/2 sm:w-full h-auto p-5 flex flex-col justify-center items-center border '>
        <img src='/p2.jpg' className={`md:w-2/3 md:h-auto sm:w-full sm:h-auto ${styles.shadowimg}`} />
      </motion.div>

      


      <motion.div
      variants={{
        hidden:{opacity:0,x:200},
        visible:{opacity:1,x:0}
    }}
    transition={{ duration: 1 }}
     initial="hidden"
      whileInView="visible"
       className={`md:w-1/2 sm:w-full p-5 ${styles.container}`}>
        <div className={`text-3xl font-extrabold px-10 py-5 ${styles.bordera} ${styles.shadow} text-center`}>
          About me
        </div>

        
<ol class="relative border-s border-gray-200 dark:border-gray-700 mt-10">                  
    <li class="mb-10 ms-4">
        <div class={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 ${styles.bordersa}`}></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" style={{color:"var(--textColor)"}}>
        I successfully passed my matriculation exam with four distinguished honors, achieving an impressive score of 489 marks. In December 2019, I embarked on an exciting new chapter by joining the prestigious University of Information Technology, where I began my journey towards academic and professional excellence
        </time>
        
    </li>
    <li class="mb-10 ms-4">
        <div class={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5  ${styles.bordersa}`}></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" style={{color:"var(--textColor)"}}>
        Since December 2021, I have been learning various web technologies, including JavaScript, React, Next.js, Laravel, PHP, and Java, among others. During this time, I have developed several full-stack web applications, such as a clinic management system, an online learning system, and more.
        </time>
        
    </li>
    <li class="ms-4">
        <div class={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5  ${styles.bordersa}`}></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" style={{color:"var(--textColor)"}}>
        Currently, I am working as a freelance web developer, leveraging my skills in various web technologies to deliver high-quality projects for my clients
        </time>
      
    </li>
</ol>


      </motion.div>


    </div> 
  )
}

export default About