'use client'
import React from 'react'
import { motion } from 'framer-motion'
function Opacity({children,y}) {
  return (
    <motion.div className=''
    variants={{
        hidden:{opacity:0,y:parseInt(y)},
        visible:{opacity:1,y:0}
    }}
    transition={{ duration: 0.5 }}
     initial="hidden"
      whileInView="visible"
    >
{children}
    </motion.div>
  )
}

export default Opacity