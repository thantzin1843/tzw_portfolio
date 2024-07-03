'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { usePathname, useRouter } from 'next/navigation'

function Navbar() {
    const [show , setShow ] = useState(false);
    const [path,setPath] = useState('/')

  return (
    <div className='relative'>
        <div className='w-full  h-[75px] items-center flex justify-between'>
        <div>Logo</div>
        <div className='sm:hidden md:flex gap-10'>
            <Link href="#home" onClick={()=>setPath('/')} className={path=='/' && styles.active}>Home</Link>
            <Link href="#aboutPage" onClick={()=>setPath('/about')} className={path=='/about' && styles.active}>About</Link>
            <Link href="#projects" onClick={()=>setPath('/projects')} className={path=='/projects' && styles.active}>Projects</Link>
            <Link href="#skills" onClick={()=>setPath('/skills')} className={path=='/skills' && styles.active}>Skills</Link>
            <Link href="#contact" onClick={()=>setPath('/contact')} className={path=='/contact' && styles.active}>Contact</Link>
        </div>

        <ThemeBtn/>
        
        <div className='sm:flex md:hidden flex-col gap-3' onClick={()=>setShow(!show)}>
            <div className={styles.menubar}></div>
            <div className={styles.menubar}></div>
            <div className={styles.menubar}></div>
        </div>
        
        </div>

            {
                show && 
                <div className={`${styles.resmenu} flex bg-amber-300! flex-col justify-center items-center gap-10`}>
                        <Link href="/" className={styles.active}>Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Projects</Link>
                        <Link href="/">Skills</Link>
                        <Link href="/">Contact</Link>
                </div>
            }
    </div>
  )
}

export default Navbar