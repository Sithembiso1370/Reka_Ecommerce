import React from 'react'
import { Link } from "react-router-dom";
import BannerBar from '../Components/Nav/BannerBar';
import ButtonAppBar from '../Components/Nav/MidAppBar';
import MidBar from '../Components/Nav/MidBar';
import TopButtonAppBar from '../Components/Nav/TopAppBar';
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
    <BannerBar/>
    <TopButtonAppBar/>
    </div>
  )
}

export default Navbar


      {/* <h1>Navbar</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contactus">Contact Us</Link>
      </nav> */}