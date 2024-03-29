import React from 'react'
import AddBanner from '../AddBanner/AddBanner'
import './BannerSliding.css'
import slides from './slides'

export default function BannerSliding(props) {
  return (
    <div className='BannerSliding'>
          {            
            props.slides.map((slide)=>(
              <div className='slide'
              style={{
                background: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              >
                  <a href='/' className='slide_inner'>{slide.country}</a>
              </div>
            )) 
          }
    </div>
  )
}
