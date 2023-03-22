import React, { useState } from 'react'
import './StoreFilture.css'

import slides from './slides'
import { yellow } from '@mui/material/colors'
import sample from './720.mp4';
import { getProducts } from './ProductsData'
import { Link } from "react-router-dom";



function StoreFilture(props) {
    
    const showDetails = (e)=>{
        e.target.after("<h1>after</h1>")
    }
    

    const after = <div className='after'>after</div>


    let productsData = getProducts();
    // to clear locale storage
    // localStorage.clear()




    const handleGetFromCart =  (e,item) => {
      e.preventDefault()
      const items = JSON.parse(localStorage.getItem(item));
      if(items){
        console.log('local storage items = ',items)
        // return items;
      }
      else{
        console.log('local storage items = ',[])
        // return [];
      }
    }

    
    const handleGetFromCartNoE =  (item) => {
      const items = JSON.parse(localStorage.getItem(item));
      if(items){
        // console.log('local storage items = ',items)
        return items;
      }
      else{
        // console.log('local storage items = ',[])
        return [];
      }
    }
    const [cartItems, setcartItems] = useState();

    const handleAdd2Cart =  (e,productDetailsObject) => {
      e.preventDefault()
      const cartstatus = localStorage.setItem('Cart', JSON.stringify([...handleGetFromCartNoE('Cart'),productDetailsObject]));
      alert(`Items added to cart `);
    }
    

    const myproducts =  productsData.map((product) =>
        <div className='Product' 
        style={{
          backgroundImage: `url(${product.img})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
          <ul className="ProductDetails_top">
            <li className="productOwner"
                    style={{
                     backgroundImage: `url(${product.p_logo})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: '100%',
                     backgroundPosition: 'center'
                    }}
                    
            >
              {/* <span class="material-symbols-outlined">
              print
              </span>  */}
            </li>
            <li>{product.country}</li>
          </ul>
          <a className='ProductImage' id='ProductImage'>
          <Link
            
            className='ProductImageLink'
            to={`/Store/Product/${product.id}`}
            key={product.country}
          >$ 34.87</Link>
          </a>

          <ul className="ProductDetails_bottom">
            <li>
              <span class="material-symbols-outlined morph_up">
              thumb_up
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined morph_up">
              add_comment
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined morph_up"
              onClick={(e)=>handleAdd2Cart(e,product)}
              >
              add_shopping_cart
              </span>
            </li>
            <li>
              <span class="material-symbols-outlined morph_up" onClick={(e)=>handleGetFromCart(e,'Cart')}>
              share
              </span>
            </li>
          </ul>
        </div>
    );



    
  return (
    <div className='AnotherFilture'

    >
        <div className='FiltureSide'>
          <div className='filture_typeSelect'>
            <button>Top Categories</button>
            <button>Top Brands</button>
            <button>Top Stores</button>
          </div>
          <div className='filture_filtures'>
             <div className='filture_filture_f1 cta'>
                <span>All</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </div>
              <div className='filture_filture_f1'>
                Clothing
              </div>
              <div className='filture_filture_f1'>
               Jewelery
              </div>
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
              <div className='filture_filture_f1'>
                Consumer Electronics
              </div>
              <div className='filture_filture_f1'>
                Industrial Supplies
              </div>
              <div className='filture_filture_f1'>
               Phones,Telecoms & Accessories
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

                >
                  <div
                      style={{ 
                        background: 'url(https://cdn.dribbble.com/users/1948198/screenshots/4377223/dribble.gif)'
                        ,backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                  >
                  <div>
                    Shop over 50 000 of your Favourite products Socially,Safe Online.
                  </div>
                  </div>
                  <div
                      style={{ 
                        background: 'url(https://media0.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.gif)'
                        ,backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                  
                  >
                  <div>
                    Share products and Chat with family and friends.
                  </div>
                  </div>
                </div>
                {/* <video className='filture_add1' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video> */}
                <div className="filture_add1"
                  // style={{ background: 'url(https://www.heartfm.co.za/content/uploads/2018/11/zando-1.jpg)'}}
                >
                <div
                    style={{ 
                      background: 'url(https://www.fortna.com/wp-content/uploads/2020/12/shutterstock_1063537060.gif)'
                      ,backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                
                >
                <div>
                  TracK Orders,Wishlists,Trends,Sales
                </div>
                </div>
                <div
                  style={{ 
                  background: 'url(https://i.pinimg.com/originals/7c/89/90/7c89904c65970d2581ce4b5a392f7712.gif)'
                  ,backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                >
                <div>
                  TracK Orders,Wishlists,Trends,Sales
                </div>
                </div>
                </div>
              </div>
          </div>
        </div>
        <div className='filture_main'>
          {
              myproducts
          }
        </div>
    </div>
  )
}


  

export default StoreFilture