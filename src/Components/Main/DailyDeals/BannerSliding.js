import React from 'react'
import AddBanner from '../AddBanner/AddBanner'
import './BannerSliding.css'
import slides from './slides'

export default function BannerSliding() {
  return (
    <div className='BannerSliding'>
          {            
            slides.map((slide)=>(
              <div className='slide'>
                  {slide.country}
              </div>
            )) 
          }
    </div>
  )
}
