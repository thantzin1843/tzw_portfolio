'use client'
import React from 'react'
import styles from './hero.module.css'
import { FaArrowAltCircleDown, FaArrowDown, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
function Hero() {
  return (
    <div className={`${styles.heroContainer} relative flex flex-col justify-center items-center ` }>
      <div className='absolute top-5 left-10 flex gap-10'>
      <FaGithub className={styles.link} size={30}/>
      <FaFacebook className={styles.link} size={30}/>
      <FaLinkedin  className={styles.link} size={30}/>
      </div>
      <div>My name is </div>
      <div className={`text-5xl mb-5 ${styles.textshadow} text-center`}>Thant Zin Win</div>
      
      <div className={`mt-5 `}>I'm </div>
      <div className={`text-5xl ${styles.textshadow} flex text-center`}><BsStars size={35} />a Software Engineer</div>
      <div className='text-center absolute bottom-10 hover:scale-110 hover:bottom-8 transition-all duration-150 ease-in'>
         <BiSolidDownArrowCircle size={30} className=''/>
      </div>
    </div>
  )
}

export default Hero