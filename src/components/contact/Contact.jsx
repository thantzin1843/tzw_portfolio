'use client'
import React from 'react'
import styles from './contact.module.css'

import { CgMail } from "react-icons/cg";
import { FaArrowAltCircleDown, FaArrowDown, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import Link from 'next/link';
import {motion} from 'framer-motion'
import Form from './Form';
function Contact() {
  return (
    <div className='mt-[50px]' id='contact'>
            <div className='flex flex-wrap w-full overflow-hidden'>
                <motion.div className='md:w-2/3 sm:w-full pe-5' 
                 variants={{
                  hidden:{opacity:0,x:-50},
                  visible:{opacity:1,x:0}
              }}
              transition={{ duration: 0.5 }}
               initial="hidden"
                whileInView="visible"
                >
                <div  className='text-3xl font-bold text-center '
               
                >Contact Me</div>
                <Form/>
                </motion.div>

                <motion.div className='md:w-1/3 sm:w-full ' 
                 variants={{
                  hidden:{opacity:0,x:50},
                  visible:{opacity:1,x:0}
              }}
              transition={{ duration: 0.5 }}
               initial="hidden"
                whileInView="visible"
                >
                    <div className='text-3xl font-bold '>Contact Infos</div>
                    <div className='mt-5'>
                    <CgMail size={35} className='inline'/> &nbsp; <Link href='mailto:thantzinwin1843@gmail.com'>thantzinwin1843@gmail.com</Link>
                    </div>
                    <div className='mt-5'>
                    <FaGithub size={35} className='inline'/> &nbsp; <Link href='https://github.com/thantzin1843'>https://github.com/thantzin1843</Link>
                    </div>
                    <div className='mt-5'>
                    <MdOutlinePhone  size={35} className='inline'/> &nbsp; 09-445068826
                    </div>
                    <div className='flex mt-5 gap-2'>
                    <FaLinkedin  size={35} className='inline'/> &nbsp; <div><Link href='https://www.linkedin.com/in/thant-zin-win-5570a5242'>https://www.linkedin.com/in/thant-zin-win-5570a5242</Link>/</div>
                    </div>
                    <div className='mt-5'>
                    <CiLocationOn   size={35} className='inline'/> &nbsp; Yangon, Myanmar
                    </div>
                </motion.div>
            </div>
    </div>
  )
}

export default Contact