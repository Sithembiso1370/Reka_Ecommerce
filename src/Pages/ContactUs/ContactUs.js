import React from 'react'
import Footer from '../../Sections/Footer'
import Navbar from '../../Sections/Navbar'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='ContactUs'>
        <Navbar/>
        <div className='ContactUsMain'>Contact Us</div>
        <Footer/>
    </div>
  )
}

export default ContactUs