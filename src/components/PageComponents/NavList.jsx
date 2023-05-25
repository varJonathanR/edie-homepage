import React from 'react'

function NavList({ ulClass }) {
  return (
    <ul className={ulClass}>
        <li className="navlist-item"><a href="#Home">Home</a></li>
        <li className="navlist-item"><a href="#Services">Services</a></li>
        <li className="navlist-item"><a href="#Work">Our Work</a></li>
        <li className="navlist-item"><a href="#Clients">Clients</a></li>
        <li className="navlist-item"><a href="#Contact">Contact</a></li>
    </ul>
  )
}

export default NavList