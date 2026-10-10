import React from 'react'
import { useDark } from '../Context/ThemeContext'

const ToggleButton = () => {
const {toggleDarkMode} = useDark()

  return (
     <label style={{ fontSize: '24px', margin: '20px', display: 'block' }}>
      <input 
        type='checkbox'
        onChange={(e) => toggleDarkMode()} 
        style={{ width: '30px', height: '30px', marginRight: '10px' }} 
      />
      Change Theme
    </label>
  )
}

export default ToggleButton