import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer_left'>
        <h3>Akilli Kraal - Get to Know Us</h3>
        <div>
          <span>
            <a href="/">
            About 
            </a>
          </span>
          <span>
            <a href="/">
            Email: enquiries@akillikraal.com
            </a>
          </span>
          <span>
            <a href="/">
            WhatsApp: 060 070 2552
            </a>
            <a href="/">
            Phone: 012 943 0123
            </a>
          </span>
          <span>
            <a href="/">
            Site Map
            </a>
          </span>
          <span>
            <a href="/">
            © 2022 AkilliKraal (Pty) Ltd, All Rights Reserved
            </a>
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
      <div className='footer_right'>
        <h3>Akilli Admin</h3>
        <div>
          <span>
            <a href="/">
            Secure Payments
            </a>
          </span>
          <span>
            <a href="/">
            Follow us links
            </a>
          </span>
          <span>
            <a href="/">
            download app links
            </a>
          </span>
        </div>
      </div>
    </div>
  )
  }

export default Footer