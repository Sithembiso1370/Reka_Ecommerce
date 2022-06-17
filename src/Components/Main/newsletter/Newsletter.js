import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <label for="newsletter_inp" className='newsletter_inp'>Subscribe</label>
        <input type="text" placeholder="Type email...."/>
        <button>send</button>
    </div>
  )
}

export default Newsletter