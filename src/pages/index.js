import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'


const IndexPage = () => (
  <div className='HeroGroup'>
    <div className='ContainerLeft'>
  
      <h1>Jam along <br/> without improvisation.</h1>

      <p>Design perfect websites with the controlled
          flexibility of the atomic level React
           component library. Created by a micro team of one designer
            and developer, now open to contributions.</p>

      <div className='buttonGroup'>
      
      <button className='primaryButton'>
      To Github
      </button>

      <button className='secondaryButton'>
      To Sketch File
      </button>
      
      </div>

    </div>

    <div className='ContainerRight'>
    <img src={require('../assets/turntable.svg')} />
</div>

  </div>
)

export default IndexPage
