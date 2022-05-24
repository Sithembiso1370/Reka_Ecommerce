import { ClassNames } from '@emotion/react'
import React from 'react'
import ElevateAppBar from '../Components/Others/AppBarElevate'
import TemporaryDrawer from '../Components/TemporaryDrawer'
import Footer from '../Sections/Footer'
import Main from '../Sections/Main'
import Navbar from '../Sections/Navbar'
import './LandingPage.css'



function LandingPage() {
  return (
    <div className='landingpage'>
        <Navbar/>
        <Main/>
    </div>
  )
}

export default LandingPage