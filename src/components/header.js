import React from 'react'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <nav className="topnav">
      <a
        href="https://www.linkedin.com/in/vraj247/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a
        href="https://www.behance.net/vraj247"
        target="_blank"
        rel="noopener noreferrer"
      >
        Behance
      </a>
      <a
        href="https://dribbble.com/Vraj247"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src = "https://vijayverma.co/dribbble.svg">
        Dribbble
      </a>

      <a
        href="https://github.com/Vraj247/Vraj247"
        target="_blank"
        rel="noopener noreferrer"
      >
        Settings
      </a>
    </nav>
  </div>
)

export default Header
