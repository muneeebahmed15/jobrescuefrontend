import React from 'react'
import Navbar from './Navbar'
import Carousels from './Carousel'
import Gallery from './Gallery'
import Record from './Record'
import Contact from './Contact'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Carousels/>
        <Record/>
        <Gallery/>
        <Contact/>
    </div>
  )
}

export default LandingPage
