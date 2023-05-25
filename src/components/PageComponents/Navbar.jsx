import React, { useState } from 'react'
import NavList from '../PageComponents/NavList'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
        <h1>Edie</h1>
        <NavList ulClass={`navList-he ${isOpen && "open"}`} />
        <div className={`nav-toggle ${isOpen && "open"}`} 
        onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
    </div>
  )
}

export default Navbar