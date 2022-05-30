import React from 'react'
import LowerBar from '../Components/LowerBar'
import DailyDeals from '../Components/Main/DailyDeals/DailyDeals'
import Topbrands from '../Components/Main/DailyDeals/Topbrands'

import CitiesSlider from '../Components/Main/SmoothSlider'
import TemporaryDrawer from '../Components/TemporaryDrawer'
import './Main.css'


const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
];



function Main() {
  return (
    <div className='Main'>
      <div className='mainSub_1'>
        {/* carasel,BANNER source:https://codepen.io/AlikinVV/pen/BbyZVW
      immersive 3js: https://codepen.io/jcoulterdesign/pen/ryzvqG */}
      <CitiesSlider slides={slides} />
      
      {/* <BannerCarouselSlide/> */}
      </div>
      <div className='mainSub_2'>
        <DailyDeals/>
      </div>
      <div className='mainSub_3'>
        <Topbrands/>
      </div>
      <div className='mainSub_5'>Banner Sliding: Sales/makerting</div>
      <div className='mainSub_6'>Facebook Style Filturable Categories, Products tIKTOK STYLE headless card like tiktok/facebook marketplace,Card style Social and ecommerce</div>
      <div className='mainSub_7'>News Letter Grid per category</div>
      <div className='mainSub_8'>
        shipping info
        {/* <Carousel/> */}
        
        
      </div>
    </div>
  )
}

export default Main