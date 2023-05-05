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
import { useEffect } from 'react';
import axios from 'axios';



function StoreFilture(props) {
  const [data, setData] = useState([]);
    // to clear locale storage
    // localStorage.clear()

    // 👇️ filter with 1 condition
    const filteredArrayOfObjects =  (ArrayOfObjects,ObjectKey,valueComparedTo) => {
      let filturedArray = []

      // // Loop through each Object in the array and check if the key being searched for exists
      // ArrayOfObjects.forEach(element => {
      //   // console.log("element = ",element);
      //   if(element[ObjectKey].toLowerCase() === valueComparedTo.toLowerCase()){
      //     filturedArray = [...filturedArray,element];
      //   }
      //   else{
      //     // console.log("Not filturing according to : ",element[ObjectKey].toLowerCase())
      //   }
      // });


      // console.log(`filturedArray = `,filturedArray)
      return ArrayOfObjects.filter((el) => el[ObjectKey].toLowerCase() === valueComparedTo.toLowerCase());
    };

    const fetchInventory = async () => {
      // ASYNC START
      let filturedArray = []
      axios.get('http://localhost:5000/api/inventory')
      .then((res)=>{
        // ASYNC
        filturedArray =  () =>{
          if(props.department === ''){
            return res.data;
          }
          else{
            return filteredArrayOfObjects(res.data,'department',props.department);
          } 
        }
        
        setData(filturedArray)
        console.log("res.data = ",res.data);
        console.log(`filturedArray for = `,filturedArray);
        return filturedArray;
  
      })
      .catch((err)=>{
        console.log("axios error : ",err)
      });
      return filturedArray;
    };

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
    
    const handleGetFromCart =  (e,item) => {
      e.preventDefault()
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
           
    const myproducts =  data.slice(0, 12).map((product) =>
        <Product handleAdd2Cart={handleAdd2Cart} handleGetFromCart={handleGetFromCart}   product={product}/>
    );
    



    useEffect(() => {
      fetchInventory();
    }, []);

    
  return (
    <div className='AnotherFilture'>
      <AnotherFiltureTop/>
      <AnotherFiltureMain products={data}/>
    </div>
  )
}


  

export default StoreFilture