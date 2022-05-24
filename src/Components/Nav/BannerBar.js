import React from 'react'
import './BannerBar.css'
import '.././Nav/opButtonAppBar.css'

function BannerBar() {
  return (
    <div className='bannerbar'>
      <ul>
        <li className='bb_li_1'>
        <span class="material-symbols-outlined _color_orange">
        call
        </span>
        </li>
        <li className='bb_li_2'>
        <span class="material-symbols-outlined _color_orange" >
        mail
        </span>
        </li>
        <li className='bb_li_4'></li>
        <li className='bb_li_5'>FAQ's</li>
        <li className='bb_li_6'>Help?</li>
        <li className='bb_li_7'>ZAR</li>

      </ul>
    </div>
  )
}

export default BannerBar