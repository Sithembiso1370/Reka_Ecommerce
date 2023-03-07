import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer_left1'>
        <h3>Akilli Kraal - Get to Know Us</h3>
        <div>
          <span>
            About 
          </span>
          <span>
            <a href="/">
           <h3>Email : </h3><a href='/'>enquiries@akillikraal.com</a>
            </a>
          </span>
          <span>
            <a href="/">
            <h3>Text/Cell : </h3><a href=''>060 070 2552</a>
            </a>
          </span>
          <span>
            Site Map
          </span>
        </div>
      </div>
      <div className='footer_center'>
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
      <div className='footer_right2'>
        <h3>Akilli Admin</h3>
        <div>
          <span><a href="/">Secure Payments</a></span>
          <span><a href="/">Secure Payments</a></span>
          <span>
            <span><a href="/">Secure Payments</a>
            </span>
            <span >
              <img src='data:image/png;base64,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' alt="BigCo Inc. logo"/>
            </span>
          </span>
          <span><a href="/">Follow us links</a></span>
        </div>
      </div>
    </div>
  )
  }

export default Footer