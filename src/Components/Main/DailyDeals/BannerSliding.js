import React from 'react'
import AddBanner from '../AddBanner/AddBanner'
import './BannerSliding.css'
import slides from './slides'

export default function BannerSliding() {
  return (
    <div className='BannerSliding'>
      <div className="arrowleftHolder">
        left
      </div>
      <div className="SlideHolder">
          {            
            slides.map((slide)=>(
              <div className='slide'>
                  {slide.country}
              </div>
            )) 
          }
      </div>
      <div className="arrowRighttHolder">
          right
      </div>
    </div>
  )
}
