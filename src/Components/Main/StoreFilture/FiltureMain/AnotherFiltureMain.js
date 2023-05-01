import React from 'react'
import Product from '../Product'

function AnotherFiltureMain(props) {
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

  const myproducts =  props.products.slice(0, 12).map((product) =>
  <Product handleAdd2Cart={handleAdd2Cart} handleGetFromCart={handleGetFromCart}   product={product}/>
  )
  return (
    <div className='AnotherFiltureMain'>
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

export default AnotherFiltureMain