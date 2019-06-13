import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'


const IndexPage = () => (
  <div className='HeroGroup'>

    <div className='ScrollOne'>
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

<div className='ScrollTwo'>


<h1>How it's gonna work?</h1>


<div className='DisplayContainer'>

<div className='SideLeft'>
  
  <h3>I'm a Designer</h3>

<p> But I must explain to you how all this mistaken idea of denouncing 
  pleasure and praising pain was born and I will give you a complete account 
  of the system, and expound the actual teachings of the great explorer of the truth, 
  the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, 
  because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter 
  consequences that are extremely painful. </p>
</div>

<div className='SideRight'>
  
  <h3>I'm a Developer</h3>

<p> But I must explain to you how all this mistaken idea of denouncing 
  pleasure and praising pain was born and I will give you a complete account 
  of the system, and expound the actual teachings of the great explorer of the truth, 
  the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, 
  because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter 
  consequences that are extremely painful. </p>
</div>

</div>

</div>

</div>

)

export default IndexPage
