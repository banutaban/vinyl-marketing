import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import '../layouts/index.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link to="/"><img src={require('../assets/vinyl-logo.png')} /></Link>
    <div className="HeaderGroup">
    <Link to="/components">Components</Link>
    <Link to="/designertutorial">Designer Tutorial</Link>
    <Link to="/roadmap">Roadmap</Link>
    <Link to="/about">About</Link>
    <div className="Hamburger">
    <Link to="/about">Menu</Link>
    </div>
    </div>
  </div>
)


export default Header

