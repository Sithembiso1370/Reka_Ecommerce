import React from 'react'
import './BannerBar.css'
import '.././Nav/opButtonAppBar.css'

function BannerBar() {
  return (
    <div className='bannerbar'>
      <ul>
        <li className='bb_li_1'>
        <span class="material-symbols-outlined ">
        call
        </span>
        </li>
        <li className='bb_li_2'>
        <span class="material-symbols-outlined " >
        mail
        </span>
        </li>
        <li className='bb_li_4'>
          <span class="material-symbols-outlined ">
            local_shipping
          </span>
        </li>
        <li className='bb_li_5'>
          {/* FAQ's */}
          <span class="material-symbols-outlined">
          quiz
          </span>
          </li>
        <li className='bb_li_6'>
          {/* Help? */}
          <span class="material-symbols-outlined">
          live_help
          </span>
        </li>
        <li className='bb_li_7'>
          <span class="material-symbols-outlined ">
          currency_exchange
          </span>
          |
          <span class=" ">
          ZAR 265.87 
          </span>
        </li>

      </ul>
    </div>
  )
}

export default BannerBar