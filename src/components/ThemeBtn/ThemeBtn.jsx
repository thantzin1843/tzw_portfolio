import React, { useContext } from 'react'
import Image from 'next/image'
import styles from './theme.module.css'
import { ThemeContext } from '@/context/ThemeContext'
function ThemeBtn() {
    const {theme,toggleTheme} = useContext(ThemeContext);
    console.log(theme);
  return (
    <div className={` ${styles.themeCon} flex justify-between items-center rounded-full px-1`}>
            <Image width={25} height={25} src='/sun.png' />
            <div className={`${styles.ball} ${theme=='light' ? 'right-0' :'left-0'}`} onClick={()=>toggleTheme()}></div>
            <Image width={25} height={25} src='/moon.png' />
    </div>

  )
}

export default ThemeBtn