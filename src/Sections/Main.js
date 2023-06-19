import React from 'react'
import './Main.css'
import Topbrands from '../Components/Main/DailyDeals/Topbrands'
import CitiesSlider from '../Components/Main/Sliders/SmoothSlider/SmoothSlider'
import StoreFilture from '../Components/Main/StoreFilture/StoreFilture'
import Newsletter from '../Components/Main/newsletter/Newsletter'
import ShippingDetails from '../Components/Main/ShippingDetails/ShippingDetails'
import TopCategories from '../Components/Main/TopCategories/TopCategories'
import brands from './brands'
import { useState } from 'react'
import FloatingSocials from '../Components/Main/FloatingSocials/FloatingSocials'
import AuthCard from '../Components/Main/AuthCard/AuthCard'
import MostLoved from './MostLoved'
import newArrivals from './newArrivals'
import MostLovedCarousel from '../Components/Main/DailyDeals/MostLovedCarousel/MostLovedCarousel'
import RecentlyViewed from '../Components/Main/DailyDeals/RecentlyViewed/RecentlyViewed'
import ProductSlider from '../Components/Main/Sliders/ProductSlider/ProductSlider'
import Footer from './Footer'
import axios from 'axios';
import { useEffect } from 'react'

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
  // State variable to hold all inventory
  const [inventoryList, setInventoryList] = useState([]);
    // State variable to hold all department name from url
  const [department, setdepartment] = useState(window.location.href.split('/')[5] ? window.location.href.split('/')[5] : '');

    // 👇️ filter with 1 condition
    const filteredArrayOfObjects = (ArrayOfObjects,ObjectKey,valueComparedTo) => ArrayOfObjects.filter(Object => {
      return Object[ObjectKey] === valueComparedTo;
    });

  // Function to filture data by department
  const filterDataBydepartment = (department) =>{
    let filturedDepartments = []
    for (let i= 0; i<inventoryList.length; i++) {
      if (inventoryList[i].department.toLowerCase() === department.toLowerCase()) {
        filturedDepartments = [...filturedDepartments,inventoryList[i]];
      }
      else{
        console.log("Not filtuing according to : ",inventoryList[i].department.toLowerCase())
      }
    }
    return filturedDepartments
  }

  const filterBydepartment = (department) => {
    // Avoid filter for empty string
    // if (!selectedBrand) {
    //   return filteredData;
    // }

    // const filtereddepartments = inventoryList.filter(
    //   (inventory) => inventory.department.split(" ").indexOf(department) !== -1
    // );
    // return filtereddepartments;
    inventoryList.forEach(element => {
        console.log("inventory list = ",element);
        if(element.department === department){
          console.log('in mens clothing = ',element)
        }
        else{
          console.log('Not in mens clothing = ')
        }
    });
  };




  const fetchInventory = async () => {
    // ASYNC START
    axios.get('http://localhost:5000/api/inventory')
    .then((res)=>{
      // ASYNC
      setInventoryList(res.data);
      setInventoryList(inventoryList);
      console.log("res.data = ",res.data);
      console.log("inventoryList = ",res.data);
      return res.data;

    })
    .catch((err)=>{
      console.log("axios error : ",err)
    });
    return [];
    

  };

  const  setData = async ()=>{
    const myinventory = await fetchInventory();
    await setInventoryList(myinventory);
  }


  useEffect(() => {
    fetchInventory();
    // setData();
    // console.log("backend inventory = ",inventoryList)
  }, []);

  const filterDataBySubdepartment = (department) =>{
    let filteredDataBySubdepartment = [];
    for (let i= 0; i<inventoryList.length; i++) {
      if (inventoryList[i].subdepartment  === department ) {
        filteredDataBySubdepartment = [...filteredDataBySubdepartment, inventoryList[i]];
      }
    }

    return filteredDataBySubdepartment;
  }
  
  // console.log("params = ",window.location.pathname);
  // console.log("MensClothing = ",filterDataBydepartment('Mens_Clothing'))
  return (
    <div className='Main'>
      {/* Floating social icons */}
      <FloatingSocials/>
      <div className='mainSub_1'>
        {/* 1. Need to pass in department Slides */}
        {/* 2. Need to create a department slides schema in the backend */}
        <CitiesSlider slides={slides} department={department} className='citisliderr' interval={9000}/>
        {/* Need to add authentication functionality */}
        <AuthCard/>
      </div>
      <div className='mainSub_3'>
        {/* Need to wire links to all brands */}
        {/* Need to create a brands schema to pull this data from */}
        <Topbrands brands={brands} label="Top Brands" interval={1500} />
      </div>
      <div className='mainSub_2_2'>
        {/* Need to wire links to all subdepartments */}
        {/* Need to use backend data filtured by likes/& views */}
        <MostLovedCarousel  interval={4500}/>
      </div>
      <div className='mainSub_2'>
        {/* Pass in filtured department banner Object */}
        <CitiesSlider slides={slides} className='hoverable'  department={department} interval={8000}/>
        {/* Pass in filtured products by department */}
        <ProductSlider slides={slides} className='hoverable'  department={department}/>
        {/* Pass in filtured products by department */}
        <ProductSlider slides={slides} className='hoverable'  department={department}/>
      </div>

      <div className='mainSub_4'>
        {/* Pass in filtured products by department */}
        {/* Need to filturable by price functionality */}
        {/* Need to filturabe by price,department,brand and store functionality */}
        <StoreFilture inventoryList={inventoryList} setData={setData} fetchInventory={fetchInventory} filteredArrayOfObjects={filteredArrayOfObjects} department="Mens_Clothing"/>
      </div>
      <div className='mainSub_3_3_1'>
        {/* backend data filtured by date */}
        <Topbrands brands={newArrivals} interval={4000}   label="New Arrivals"/>
      </div>
      <div className='mainSub_3_3_2'>
        {/* Need to pass in data filtured by date mix departments */}
        <RecentlyViewed interval={6000}/>
      </div>
      <div className='mainSub_5'>
        {/* Pass in filtured department banner Object */}
        <CitiesSlider slides={slides} className='hoverable'  department={department} interval={65000}/>
        {/* Pass in filtured products by department */}
        <ProductSlider slides={slides} className='hoverable'  department={department}/>
      </div>
      <div className='mainSub_6'>
        {/* Pass in filtured products by department */}
        <StoreFilture inventoryList={inventoryList} setData={setData} fetchInventory={fetchInventory} filteredArrayOfObjects={filteredArrayOfObjects} department="Womens_clothing"/>
      </div>
      <div className='mainSub_6_5'>
        {/* filture by products with the most likes  */}
        {/* Need to pass in backend data by most bought brands */}
      <Topbrands brands={MostLoved} interval={5000} label="More Shopping..." />
      </div>

      <div className='mainSub_6_6'>
        <TopCategories />
      </div>
      <div className='mainSub_7'>
         {/* Need to wire functionality to user mailing list per department */}
        <Newsletter/>
      </div>
      <div className='mainSub_8'>
          {/* Need to add descriptive text like other stores */}
          <ShippingDetails/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main

