import React from 'react'
import './Main.css'
import DailyDeals from '../Components/Main/DailyDeals/DailyDeals'
import Topbrands from '../Components/Main/DailyDeals/Topbrands'
import CitiesSlider from '../Components/Main/SmoothSlider/SmoothSlider'
import SinglerRowCarousel from '../Components/Main/SinglerRowCarousel/SinglerRowCarousel'
import StoreFilture from '../Components/Main/StoreFilture/StoreFilture'
import Newsletter from '../Components/Main/newsletter/Newsletter'
import ShippingDetails from '../Components/Main/ShippingDetails/ShippingDetails'
import { useParams } from "react-router-dom";
import MostLovedCarousel from '../Components/Main/MostLovedCarousel/MostLovedCarousel'
import NewArrivalsCarousel from '../Components/Main/NewArrivalsCarousel/NewArrivalsCarousel'
import TopCategories from '../Components/Main/TopCategories/TopCategories'
import slidez from './slides'
import brands from './brands'
import { useState } from 'react'
import FloatingSocials from '../Components/Main/FloatingSocials/FloatingSocials'
import AuthCard from '../Components/Main/AuthCard/AuthCard'
import MostLoved from './MostLoved'
import newArrivals from './newArrivals'
import RecentlyViewed from './RecentlyViewed'

const slides = [
  {
    city: 'Home & Deco.',
    country: 'Furniture',
    img: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/10/13/1/CI_Ilya_Zabanov-mastersandforbes-livingroom-Image1.jpg.rend.hgtvcom.966.725.suffix/1602599983799.jpeg',
  },
  {
    city: 'Print on Demand',
    country: 'Custom Printing',
    img: 'https://ik.imagekit.io/ccyubla1p9v/orderhive/wp-content/uploads/2019/09/banner-1-1.png',
  },
  // https://d2g6byanrj0o4m.cloudfront.net/images/3575/woven_baskets.jpg
  {
    city: 'Trending Gadgets',
    country: 'Tech',
    img: 'https://images.autods.com/OfficialSite/New/20201103091044/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021-1024x576.png',
    
  },
  {
    city: 'African Crafts',
    country: 'Arts and Crafts',
    img: 'https://d2g6byanrj0o4m.cloudfront.net/images/3575/woven_baskets.jpg',
  },
  {
    city: 'Mens',
    country: 'Clothing',
    img: 'https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-william-mattey-3768005.jpg&fm=jpg',
  },
  {
    city: 'Womens',
    country: 'Clothing',
    img: 'https://blog.bizvibe.com/wp-content/uploads/2020/03/top-clothing-retailers.jpg',
  },
  {
    city: 'Jewelery',
    country: 'Accesories',
    img: 'https://images.unsplash.com/photo-1576723417715-6b408c988c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  },
  {
    city: 'Kids',
    country: 'Clothing',
    img: 'https://image.cnbcfm.com/api/v1/image/106032900-1563825608021rockets.jpg?v=1563825858&w=1600&h=900',
  },
  {
    city: 'camping',
    country: 'Outdoors',
    img: 'https://media.self.com/photos/6238bbdfd226c69aaec6d069/4:3/w_2560%2Cc_limit/GettyImages-926586802.jpg',
  },
  {
    city: 'Digital Services',
    country: 'Services',
    img: 'https://www.aress.com/assets/images/digital-services/digital-services-hader-bg.png',
  },
  {
    city: 'Office Stationary',
    country: 'Stationary & Supplies',
    img: 'https://qph.cf2.quoracdn.net/main-qimg-737e65e2b67fd21bc97f4dd0c602a7da-lq',
  },
  {
    city: 'Kids Toys',
    country: 'Toys and Play',
    img: 'https://jupiterx.artbees.net/toys-shop/wp-content/uploads/sites/261/2019/07/Category_Banner.png',
  },
  // https://www.canadianmanufacturing.com/wp-content/uploads/2018/03/internet_of_things_iot_iiot_industry_4.0.jpg
  {
    city: 'Free Staff',
    country: 'Downloadables',
    img: 'https://imgix.ranker.com/list_img_v2/8221/2668221/original/ways-to-get-free-stuff-online-u1',
  },
  {
    city: 'Industrial Automation',
    country: '4IR',
    img: 'https://www.canadianmanufacturing.com/wp-content/uploads/2018/03/internet_of_things_iot_iiot_industry_4.0.jpg',
  },
];





const Main = () => {
  const [department, setdepartment] = useState(window.location.href.split('/')[5] ? window.location.href.split('/')[5] : '')
  
  console.log("params = ",window.location.pathname);
  return (
    <div className='Main'>
      <FloatingSocials/>
      {/* <RightSideBanner/> */}
      <div className='mainSub_1'>
        <CitiesSlider slides={slides} department={department} className='citisliderr'/>
        <AuthCard/>
      </div>
      <div className='mainSub_3'>
        <Topbrands brands={brands} label="Top Brands"/>
      </div>
      <div className='mainSub_2'>
        <CitiesSlider slides={slides}  department={department}/>
        <CitiesSlider slides={slides}  department={department}/>
        <CitiesSlider slides={slides}  department={department}/>
      </div>
      <div className='mainSub_2_2'>
        {/* <MostLovedCarousel/> */}
        <Topbrands brands={MostLoved} label="Most Loved"/>
      </div>
      <div className='mainSub_4'>
        <div className="StoreFiltureTop curved_borderTop">
        StoreFilture Top and more : {department}
        </div>
        <StoreFilture/>
      </div>
      <div className='mainSub_3_3_1'>
        <Topbrands brands={newArrivals}   label="New Arrivals"/>
      </div>
      <div className='mainSub_3_3_2'>
        {/* <NewArrivalsCarousel/> */}
        <Topbrands brands={RecentlyViewed} label="Recently Viewed"/>

      </div>
      <div className='mainSub_5'>
        <CitiesSlider slides={slides}  department={department}/>
        <CitiesSlider slides={slides}  department={department}/>
      </div>
      <div className='mainSub_6'>
        <div className="StoreFiltureTop curved_borderTop">
        StoreFilture Top and more : {department}
        </div>
        <StoreFilture/>
      </div>
      <div className='mainSub_6_5'>
      {/* <NewArrivalsCarousel/> */}
      <Topbrands brands={newArrivals} label="Shop Clothing" />
      </div>

      <div className='mainSub_6_6'>
        <TopCategories/>
      </div>
      <div className='mainSub_7'>
        <Newsletter/>
      </div>
      <div className='mainSub_8'>
          <ShippingDetails/>
      </div>
    </div>
  )
}

export default Main

