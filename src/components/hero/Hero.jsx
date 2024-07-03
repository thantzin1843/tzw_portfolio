'use client'
import React from 'react'
import styles from './hero.module.css'
import { FaArrowAltCircleDown, FaArrowDown, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import Link from 'next/link';
import Opacity from '../animation/Opacity';
function Hero() {
  return (
    <div id='home' className={`${styles.heroContainer} relative flex flex-col justify-center items-center ` }>
      <div className='absolute top-5 left-10 flex gap-10'>
      <Link href='https://github.com/thantzin1843'><FaGithub className={styles.link} size={30}/></Link>
      <Link href='mailto:thantzinwin1843@gmail.com'><CgMail className={styles.link} size={30}/></Link>
      <Link href='https://www.linkedin.com/in/thant-zin-win-5570a5242/'><FaLinkedin  className={styles.link} size={30}/></Link>
      </div>
      <Opacity y={-30}>
      <div
      className='overflow-hidden text-center'
      >My name is 
      </div>
      <div className={`text-5xl mb-5 ${styles.textshadow} text-center`}>Thant Zin Win</div>
      </Opacity>

      <Opacity y={30}>
      <div className={`mt-5 text-center`}>I'm </div>

      <div className={`text-5xl ${styles.textshadow} text-center`}><BsStars size={35} className='inline'/>a Software Engineer</div>
      </Opacity>
      
      <Link href="#aboutPage" className='text-center absolute bottom-10 hover:scale-110 hover:bottom-8 transition-all duration-150 ease-in'>
         <BiSolidDownArrowCircle size={30} className=''/>
      </Link>
    </div>
  )
}

export default Hero