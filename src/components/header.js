import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to ="https://www.linkedin.com/in/vraj247/">Linkedin</Link>
    <Link to ="https://www.behance.net/vraj247">Behance</Link>
    <Link to ="https://dribbble.com/Vraj247">Dribbble</Link>
    <Link to ="https://www.instagram.com/vraj247/">Instagram</Link>
    <Link to ="https://github.com/Vraj247">Github</Link>
    </div>
  </div>
)

export default Header
