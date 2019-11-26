import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <div className="img">
      <img src = "https://avatars3.githubusercontent.com/u/14306259?s=460&v=4"></img>
      </div>  
      <h1>👋 Hello humans! </h1>
      <p>I'm a Product Designer, currenly designing digital products for 100 Million+ humans at Paytm. I believe in designing experiences which solves problems but looks cool at the same time. Found myself between a designer and an Engineer </p>
      <Link to= "/Page2/">In Progress</Link> 
      </div>
    </div>
  </div>
)

export default IndexPage
