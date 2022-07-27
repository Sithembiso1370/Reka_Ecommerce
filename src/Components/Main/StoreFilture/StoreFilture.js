import React from 'react'
import './StoreFilture.css'

import slides from './slides'
import { yellow } from '@mui/material/colors'
import sample from './720.mp4';



function StoreFilture() {

    const showDetails = (e)=>{
        e.target.after("<h1>after</h1>")
    }
    

    const after = <div className='after'>after</div>


    const myslides =  slides.map((slide) =>
        <div className='Product' 
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
          <ul className="ProductDetails_top">
            <li className="productOwner"
                    style={{
                     backgroundImage: `url(${slide.p_logo})`
                    }}
                    
            >
              <span class="material-symbols-outlined">
              print
              </span> 
            </li>
            <li>{slide.country}</li>
          </ul>
          <div
          // 'ProductContainer cont_image'
          className='ProductImage'
          // onMouseEnter={showDetails}

          >$ 34.87</div>
          <ul className="ProductDetails_bottom">
            <li>
              <span class="material-symbols-outlined">
              thumb_up
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined">
              share
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined">
              favorite
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined">
              add_shopping_cart
              </span>
            </li>
          </ul>
        </div>

    );
  return (
      
    <div className='AnotherFilture'>
        <div className='FiltureSide'>
          <div className='filture_typeSelect'>
            <button>Top Categories</button>
            <button>Top Brands</button>
            <button>Top Stores</button>
          </div>
          <div className='filture_filtures'>
              <div className='filture_filture_f1'>
                Clothing
              </div>
              <div className='filture_filture_f1'>
               Jewelery
              </div>
              <div className='filture_filture_f1'>
                Accessories and Watches
              </div>
              <div className='filture_filture_f1'>
                Health and Beauty
              </div>
              <div className='filture_filture_f1'>
                Consumer Electronics
              </div>
              <div className='filture_filture_f1'>
                Industrial Supplies
              </div>
              <div className='filture_filture_f1'>
               Phones,Telecoms & Accessories
              </div>
              <div className='filture_filture_f1 f8'
             
              >
                <div className="filture_add1"
                  style={{ background: 'url(https://cdn.theorg.com/ee8a0d5c-9efa-4939-89e7-7a31340db532_thumb.jpg)'}}
                >
                filture_add1
                
                </div>
                {/* <video className='filture_add1' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video> */}
                <div className="filture_add1"
                  style={{ background: 'url(https://www.heartfm.co.za/content/uploads/2018/11/zando-1.jpg)'}}
                >
                filture_add2
                </div>
              </div>
            </div>
          </div>
          <div className='filture_main'>
            {
                myslides
            }
           </div>
      </div>
  )
}


  

export default StoreFilture