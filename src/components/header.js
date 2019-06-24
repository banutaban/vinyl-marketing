import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import '../layouts/index.css'
import Container from './container/container'
import {Grid, Col} from './grid/grid'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Container>
      <Grid>
        <Col size="medium">
        <Link to="/"><img src={require('../assets/vinyl-logo.png')} /></Link>
        </Col>

        <Col size="large">
        <div className="HeaderGroup">
    <Link to="/components">Components</Link>
    <Link to="/designertutorial">Designer Tutorial</Link>
    <Link to="/roadmap">Roadmap</Link>
    <Link to="/about">About</Link>
    <div className="Hamburger">
    <Link to="/about">Menu</Link>
    </div>
    </div>
      </Col>
      </Grid>
  
    </Container>
  </div>
)


export default Header

