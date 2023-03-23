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

        >
          <ul className="ProductDetails_top">
            <li>{product.country}</li>
            <span class="material-symbols-outlined">
            bookmark
            </span>
          </ul>
          <a className='ProductImage' id='ProductImage'
                  style={{
                    backgroundImage: `url(${product.img})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
          >
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
               Phones & Telecoms
              </div>
              <div className='filture_filture_f1'>
                Consumer Electronics
              </div>
              <div className='filture_filture_f1'>
                Industrial Supplies
              </div>
              <div className='filture_filture_f1'>
                Consumer Electronics
              </div>
              <div className='filture_filture_f1'>
                Industrial Supplies
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