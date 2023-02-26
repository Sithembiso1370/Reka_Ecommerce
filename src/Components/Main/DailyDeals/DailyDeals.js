import React from 'react'
import BannerSliding from './BannerSliding'
import './DailyDeals.css'

function DailyDeals(props) {



  return (
    <div className='DailyDeals'>

        <div className='DailyDealPSlider'>
                <BannerSliding slides={props.slides}/>
        </div>
    </div>
  )
}

export default DailyDeals