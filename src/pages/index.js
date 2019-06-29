import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'
import Container from '../components/container/container'
import { Grid, Col } from '../components/grid/grid'

const IndexPage = () => (
  <div className="HeroGroup">
    <Container>
      <div className="SectionOne">
        <Grid>
          <Col size="half">
            <div className="ContainerLeft">
              <div>
                <h1>
                  Jam along <br /> without improvisation.
                </h1>

                <p>
                  Design perfect websites with the controlled flexibility of the
                  atomic level React component library. Created by a micro team
                  of one designer and developer, now open to contributions.
                </p>

                <div className="buttonGroup">
                  <button className="primaryButton">To Github</button>

                  <button className="secondaryButton">To Sketch File</button>
                </div>
              </div>
            </div>
          </Col>
          <Col size="half">
            <div className="ContainerRight">
              <img src={require('../assets/turntable.svg')} />
            </div>
          </Col>
        </Grid>
      </div>
    </Container>

    <div className="SectionTwo">
      <Container>
        <h1>How it's gonna work?</h1>

        <Grid>
          <Col size="half">
            <div className="SideLeft">
              <div className="SideContent">
                <h3>I'm a Designer</h3>

                <p>
                  {' '}
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.{' '}
                </p>
              </div>
            </div>
          </Col>

          <Col size="half">
            <div className="SideRight">
              <div className="SideContent">
                <h3>I'm a Developer</h3>

                <p>
                  {' '}
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.{' '}
                </p>
              </div>
            </div>
          </Col>
        </Grid>
      </Container>
    </div>

    <div className="SectionThree">
      <Container>
        <h5>Features</h5>
        <h3>All time hits</h3>

        <Grid>
          <Col size="tiny">
            <div className="Feature">
              <img src={require('../assets/colorcards.svg')} />
              <p>Themeable</p>
            </div>
          </Col>

          <Col size="tiny">
            <div className="Feature">
              <img src={require('../assets/hands.svg')} />
              <p>Open Source</p>
            </div>
          </Col>

          <Col size="tiny">
            <div className="Feature">
              <img src={require('../assets/rocket.svg')} />
              <p>Easy to Understand</p>
            </div>
          </Col>

          <Col size="tiny">
            <div className="Feature">
              <img src={require('../assets/sketch.svg')} />
              <p>Designer Friendly</p>
            </div>
          </Col>

          <Col size="large">
            <div className="TextBox">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful.
              </p>
            </div>
          </Col>
        </Grid>
      </Container>
    </div>

    <div className="SectionFour">
      <Container>
      <h5>Contributors</h5>
      <h3>Join the Band!</h3>
<Grid>
  <Col size='full'>
      <div className="CenterContainer">
        <img src={require('../assets/banu.png')} />
        <img src={require('../assets/oner.png')} />
        <img src={require('../assets/oval.svg')} />
        <img src={require('../assets/oval.svg')} />
        <img src={require('../assets/oval.svg')} />
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful.
        </p>
      </div>
      </Col>
      </Grid>
      </Container>
    </div>

    <div className="Footer">
      <div className="FooterGroup">
        <Link to="/">
          <img src={require('../assets/vinyl-logo.png')} />
        </Link>
        <Link to="/components">Components</Link>
        <Link to="/designertutorial">Designer Tutorial</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
   

  </div>
)

export default IndexPage
