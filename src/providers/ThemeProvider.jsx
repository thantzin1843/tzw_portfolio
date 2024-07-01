'use client'
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'

function ThemeProvider({children}) {
  const {theme} = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div className={`${theme}`}>
        {children}
    </div>
  )
}

export default ThemeProvider