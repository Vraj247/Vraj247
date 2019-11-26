import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>👋 Hello Human! </h1>
      <p>I'm a Product Designer, currenly designing digital products for 100 Million+ humans at Paytm. I believe in designing experiences which solves problems but looks cool at the same time. Found myself between a designer and an Engineer </p>
      <Link to= "/Page2/">Don't be shy, Say hi!</Link> 
      </div>
    </div>
  </div>
)

export default IndexPage
