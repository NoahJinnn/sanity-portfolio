import React, { useState } from 'react'
import NavCollection from './NavCollection'

export default function NavMenu() {
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <div className="ml-4 relative md:hidden">
      <svg
        className="no-select"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#fff"
        width="32px"
        height="32px"
        onClick={toggleMenu}>
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <div className="absolute w-28 bg-gray-700 z-20 right-0" style={{ display: `${toggle ? 'block' : 'none'}` }}>
        <NavCollection toggleMenu={toggleMenu} />
      </div>
    </div>
  )
}
