import React from 'react'
import styles from './contact.module.css'
import { IoIosSend } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaArrowAltCircleDown, FaArrowDown, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import Link from 'next/link';

function Contact() {
  return (
    <div className='mt-[50px]' id='contact'>
            <div className='flex flex-wrap w-full'>
                <div className='md:w-2/3 sm:w-full pe-5'>
                <div className='text-3xl font-bold text-center '>Contact Me</div>
                <form action="" className='w-full p-2 my-5'>
                    <input type="text" placeholder="Name" className={`${styles.border} w-full   outline-none p-3 bg-gray-600/0 shadow-lg`} />
                    <input type="email" placeholder="Email" className={`${styles.border} w-full mt-3  outline-none p-3 bg-gray-600/0`} />
                    <textarea name="" id="" className={`${styles.border} w-full mt-3  outline-none p-3 bg-gray-600/0`} rows={10}>
                    </textarea>
                    <div className='w-full flex justify-center mt-5 '>
                    <button className={`py-5 px-20 ${styles.border} mx-auto ${styles.sendbtn} flex items-center` }>Send Message&nbsp;<IoIosSend size={35}/></button>
                    </div>
                </form>
                </div>

                <div className='md:w-1/3 sm:w-full '>
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
                </div>
            </div>
    </div>
  )
}

export default Contact