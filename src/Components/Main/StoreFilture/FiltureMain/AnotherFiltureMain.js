import React from 'react'

function AnotherFiltureMain(props) {
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
            props.myproducts
        }
      </div>
    </div>
  )
}

export default AnotherFiltureMain