import React from 'react'

import DailyDeals from '../Components/Main/DailyDeals/DailyDeals'
import Topbrands from '../Components/Main/DailyDeals/Topbrands'

import CitiesSlider from '../Components/Main/SmoothSlider'
import TemporaryDrawer from '../Components/TemporaryDrawer'
import './Main.css'
import './AnotherFilture.css'
import './newsletter.css'
import { Carousel } from 'react-responsive-carousel'
import SinglerRowCarousel from '../Components/Main/SinglerRowCarousel'


const slides = [
  {
    city: 'Home & Deco.',
    country: 'Furniture',
    img: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/10/13/1/CI_Ilya_Zabanov-mastersandforbes-livingroom-Image1.jpg.rend.hgtvcom.966.725.suffix/1602599983799.jpeg',
  },
  {
    city: 'Shop - Gadgets',
    country: 'Tech',
    img: 'https://images.autods.com/OfficialSite/New/20201103091044/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021-1024x576.png',
  },
  {
    city: 'Mens',
    country: 'Clothing',
    img: 'https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-william-mattey-3768005.jpg&fm=jpg',
  },
  {
    city: 'Womens',
    country: 'Clothing',
    img: 'https://blog.bizvibe.com/wp-content/uploads/2020/03/top-clothing-retailers.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://images.unsplash.com/photo-1576723417715-6b408c988c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
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
      <div className='mainSub_5'>
        {/* Banner Sliding: Sales/makerting */}
        <CitiesSlider slides={slides} />
      </div>
      <div className='mainSub_6'>
      <div className='AnotherFilture'>
        <div className='FiltureSide'>
          <div className='filture_typeSelect'>
            <button>Categories</button>
            <button>Brands</button>
            <button>Stores</button>
          </div>
          <div className='filture_filtures'>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 1
              <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            </div>
            <div className='filture_filture_f1'>
              FILTURE FOOTER
            </div>
          </div>
        </div>
        <div className='filture_main'>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
            
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>
          <div className='ProductContainer'>
          ProductContainer
          </div>

        </div>
      </div>
      </div>
      <div className='mainSub_7'>
        <div className='newsletter'>
          <label for="newsletter_inp" className='newsletter_inp'>Subscribe</label>
          <input type="text" placeholder="Type email...."/>
          <button>send</button>
        </div>
      </div>
      <div className='mainSub_8'>
        {/* shipping info */}
          <SinglerRowCarousel/>
      </div>
    </div>
  )
}

export default Main