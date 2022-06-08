import React from 'react'
import BannerSliding from './BannerSliding'
import './DailyDeals.css'

function DailyDeals() {



  return (
    <div className='DailyDeals'>
        <h2 className="subtitle fancy">
            <hr className='leftline'/>
            <span>Daily Deals</span>
            <hr className='rightline'/>
        </h2>
        <div className='DailyDealsFilture'>
            <div className='DailyDealsFilture_buttons'>
                {/* Each department must have a representing color that will be used Gloally */}
                <button>Dep1 Icon</button>
                <button>Dep2 Icon</button>
                <button>Department1</button>
                <button>Department1</button>
                <button>Department1</button>
            </div>
        </div>
        <div className='DailyDealPSlider'>
                <BannerSliding/>
        </div>
    </div>
  )
}

export default DailyDeals