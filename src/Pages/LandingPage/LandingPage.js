import { ClassNames } from '@emotion/react'
import React from 'react'
import ElevateAppBar from '../../Components/Others/AppBarElevate'
import TemporaryDrawer from '../../Components/TemporaryDrawer'
import Footer from '../../Sections/Footer'
import Main from '../../Sections/Main'
import Navbar from '../../Sections/Navbar'
import backgroundH from "./R.gif";
import './LandingPage.css'



function LandingPage() {
  return (
    <div className='landingpage' align='center'
    style={{
      backgroundImage: "url(" + backgroundH + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}
    >
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default LandingPage