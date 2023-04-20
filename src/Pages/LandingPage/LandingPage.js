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
        {/* <Footer/> */}
    </div>
  )
}

export default LandingPage

// TODO 
// 1. Add text to shipping details tiles like takealot and other stores
// 2. remove white background on all items that should not have it
// 3. Populate stock data and retrieve for every segment of Landing Page
// 4. Footer - Add styles for footer text and color and style social icons
// 5. Newsletter make newsletter frontend and backend and allow to subscribe to different deparments,brands,Products
// 6. Wire all landing Page Links 
// 7. Products Card : Configure likes array,addtoCart and sharebutton and buy now functionality
// 8. Sign In Card : Configure likes SignIn,Register , forgot password, reset password
// 9. Make Landing Page fully responsive
// 10.Feed backend data to : Top Brands slider,RecentlyViewed slider, mainSub_5 slider for store filture, storefiluture by above slider department
// NewArrivals Carousel ,TopCategories Carousel
// 11. Make UI Clean and segmented
// 12. Feed live data to Landing Page slider
// 13. Filture functionality storefilture
// After V1 of UI is done make variations of the Landing Page



