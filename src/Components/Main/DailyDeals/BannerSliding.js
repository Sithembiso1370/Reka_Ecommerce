import React from 'react'
import AddBanner from '../AddBanner/AddBanner'
import './BannerSliding.css'

export default function BannerSliding() {
  return (
    <div className='BannerSliding'>
        {/* <h2 className="subtitle_BannerSliding">
            <hr className='leftline'/>
            <span>Top Brands</span>
            <hr className='rightline'/>
        </h2> */}
        <div className='BannerSlidingPSlider'>
            <AddBanner/>
        </div>
    </div>
  )
}
