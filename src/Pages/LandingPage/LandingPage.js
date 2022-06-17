import React from 'react'
import Footer from '../../Sections/Footer'
import Main from '../../Sections/Main'
import Navbar from '../../Sections/Navbar'
import './LandingPage.css'



function LandingPage() {
  return (
    <div className='landingpage'>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default LandingPage