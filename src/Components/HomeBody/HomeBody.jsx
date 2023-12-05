import React from 'react'
import './HomeBody.css'
import PackageSize from '../PackageSize/PackageSize'
import Navigation from '../Navigation/Navigation'
const HomeBody = () => {
  return (
    <div className='home-body'>
      <div className="container">
        <PackageSize/>
        <Navigation/>
      </div>
    </div>
  )
}

export default HomeBody