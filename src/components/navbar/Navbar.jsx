'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
function Navbar() {
    const [show , setShow ] = useState(false)
  return (
    <div className='relative'>
        <div className='w-full  h-[75px] items-center flex justify-between'>
        <div>Logo</div>
        <div className='sm:hidden md:flex gap-10'>
            <Link href="/" className={styles.active}>Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Skills</Link>
            <Link href="/">Contact</Link>
        </div>
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