import React from 'react'
import './Footer.css'
import FbIcon from './assets/fbIcon.jpg'
import instagram from './assets/instagram.jpg'
import tiktok from './assets/tiktok.jpg'
import twitter from './assets/twitter.png'


function Footer() {
  return (
    <div className='Footer'>
      <div className='footer_left1'>
        <h3>Akilli Kraal - Get to Know Us</h3>
        <div>
          <span>
            <a>About </a>
            
          </span>
          <span>
            <a href="/">
           Email: enquiries@akillikraal.com
           </a>
          </span>
          <span>
            <a href="/">
            Cell: 060 070 2552</a>
         
          </span>
          <span>
            <a>Site Map</a>
            
          </span>
        </div>
      </div>
      <div className='footer_left'>
        <h3>Akilli - Account</h3>
        <div>
          <span>
              <a href="/">
                Account
              </a>
            </span>
            <span>
              <a href="/">
                Dropshipping
              </a>
            </span>
            <span>
              <a href="/">
              Careers
              </a>
            </span>
            <span>
              <a href="/">
              Instant Salesman/women
              </a>
            </span>
        </div>
      </div>
      <div className='footer_right'>
        <h3>Support</h3>
        <div>
          <span>
            <a href="/">
            FAQ
            </a>
          </span>
          <span>
            <a href="/">
            Orders and Shipping
            </a>
          </span>
          <span>
            <a href="/">
            Returns
            </a>
          </span>
        </div>
      </div>
      <div className='footer_right1'>
        <h3>Akilli Admin</h3>
        <div>
          <span><a href="/">Secure Payments</a></span>
          <span><a href="/">Secure Payments</a></span>
          <span>
            <span >
              <img src='data:image/png;base64,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'/>
            </span>
            <span >
              <img src='data:image/png;base64,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' alt="BigCo Inc. logo"/>
            </span>
          </span>
          <span>
            <ul className='socialsimgs'>
              <li><img src={FbIcon}/></li>
              <li><img src={instagram}/></li>
              <li><img src={tiktok}/></li>
              <li><img src={twitter}/></li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
  }

export default Footer