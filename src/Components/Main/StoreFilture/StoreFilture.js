import React, { useState } from 'react'
import './StoreFilture.css'

import slides from './slides'
import { yellow } from '@mui/material/colors'
import sample from './720.mp4';
import { getProducts } from './ProductsData'
import { Link } from "react-router-dom";
import Product from './Product';
import AnotherFiltureTop from './FilterTopHeader/AnotherFiltureTop';
import AnotherFiltureMain from './FiltureMain/AnotherFiltureMain';



function StoreFilture(props) {
    
    let productsData = getProducts();
    // to clear locale storage
    // localStorage.clear()




    const handleGetFromCart =  (e,item) => {
      e.preventDefault()
      const items = JSON.parse(localStorage.getItem(item));
      if(items){
        console.log('local storage items = ',items)
        return items;
      }
      else{
        console.log('local storage items = ',[])
        return [];
      }
    }

    
    const handleGetFromCartNoE =  (item) => {
      const items = JSON.parse(localStorage.getItem(item));
      if(items){
        console.log('local storage items = ',items)
        return items;
      }
      else{
        console.log('local storage items = ',[])
        return [];
      }
    }

    const handleAdd2Cart =  (e,productDetailsObject) => {
      e.preventDefault()
      const cartstatus = localStorage.setItem('Cart', JSON.stringify([...handleGetFromCartNoE('Cart'),productDetailsObject]));
      alert(`Items added to cart `);
    }
    

    const myproducts =  productsData.map((product) =>
        <Product handleAdd2Cart={handleAdd2Cart} handleGetFromCart={handleGetFromCart}   product={product}/>
    );



    
  return (
    <div className='AnotherFilture'>
      <AnotherFiltureTop/>
      <AnotherFiltureMain myproducts={myproducts}/>
    </div>
  )
}


  

export default StoreFilture