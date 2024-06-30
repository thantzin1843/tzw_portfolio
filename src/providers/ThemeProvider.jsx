import React from 'react'

function ThemeProvider({children}) {
  return (
    <div className='light'>
        {children}
    </div>
  )
}

export default ThemeProvider