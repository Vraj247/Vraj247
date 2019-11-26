import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <div className="img">
      <img src="https://p21.f4.n0.cdn.getcloudapp.com/items/5zu54DdJ/mypic.png?v=0cb29474ad8ffb955c79f8f14c34c94b" alt="Cinque Terre" width="400" height="400"></img>
      </div>  
      <h1>Welcome fellow Human! </h1>
      <p>Myself Vikas Raj Yadav, a Product Designer currenly in Bangalore,India. I'm a self taught designer who  </p>
      <Link to= "/Page2/">In Progress</Link> 
      </div>
    </div>
  </div>
)

export default IndexPage
