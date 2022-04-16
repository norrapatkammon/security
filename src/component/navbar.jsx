import React from 'react'
import '../style/navbar.scss'
function Navbar() {
  return (
    <div id='main'>
      <nav>
        <ul className='list'>
          <li><a href="/">Shift cipher</a></li>
          <li><a href="Monoalphabetic">Monoalphabetic</a></li>
          <li><a href="Viginear_cipher">Viginear_cipher</a></li>
          <li><a href="Rsa">Rsa</a></li>
        </ul>
      </nav>
      {/* <nav>
        <ul>
          <li><a href="#" id="logo">LOGO</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
          <a href="#" id="menu-icon"></a>
        </ul>
      </nav> */}
    </div>
  )
}
export default Navbar;