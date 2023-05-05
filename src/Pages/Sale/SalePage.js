import React from 'react'
import Navbar from '../../Sections/Navbar'
import axios from 'axios';
import { useState } from 'react';
import StoreFilture from '../../Components/Main/StoreFilture/StoreFilture';
import Footer from '../../Sections/Footer';

function SalePage() {
      // State variable to hold all inventory
  const [inventoryList, setInventoryList] = useState([]);

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

    // 👇️ filter with 1 condition
    const filteredArrayOfObjects = (ArrayOfObjects,ObjectKey,valueComparedTo) => ArrayOfObjects.filter(Object => {
        return Object[ObjectKey] === valueComparedTo;
      });
    
  return (
    <div>
        <Navbar/>
        <div className="salebody">
            {/* USE SALE HEADER LIKE BAZAR */}
            <div className="salebodyHeader">
            salebodyHeader
            </div>
            <div className="salebodyBody">
            <StoreFilture inventoryList={inventoryList} setData={setData} fetchInventory={fetchInventory} filteredArrayOfObjects={filteredArrayOfObjects}/>
            <Footer/>
            </div>
        </div>
    </div>
  )
}

export default SalePage