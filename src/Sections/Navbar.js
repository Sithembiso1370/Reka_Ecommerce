import React from 'react'
import { Link } from "react-router-dom";
import BannerBar from '../Components/Nav/BannerBar';
import ButtonAppBar from '../Components/Nav/MidAppBar';
import MidBar from '../Components/Nav/MidBar/MidBar';
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

