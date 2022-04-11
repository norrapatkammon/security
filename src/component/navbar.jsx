import React from 'react'
import '../style/navbar.scss'
function Navbar() {
  return (
    <div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  )
}
export default Navbar;