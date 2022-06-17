import React from 'react'
import './StoreFilture.css'
import './AnotherFilture.css'
import slides from './slides'



function StoreFilture() {

    const showDetails = (e)=>{
        e.target.after("<h1>after</h1>")
    }
    

    const after = <div className='after'>after</div>


    const myslides =  slides.map((slide) =>
        <div className='Product' 
        style={{
          backgroundImage: `url(${slide.img})`
        }}
        >
          <ul className="ProductDetails_top">
            <li className="productOwner"
                    style={{
                      backgroundImage: `url(${slide.p_logo})`
                    }}
            ></li>
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
            <button>Categories</button>
            <button>Brands</button>
            <button>Stores</button>
          </div>
          <div className='filture_filtures'>
            <div className='filture_filture_f1'>
              Filture 1
            </div>
            <div className='filture_filture_f1'>
              Filture 2
            </div>
            <div className='filture_filture_f1'>
              Filture 3
            </div>
            <div className='filture_filture_f1'>
              Filture 4
            </div>
            <div className='filture_filture_f1'>
              Filture 5
            </div>
            <div className='filture_filture_f1'>
              Filture 6
            </div>
            <div className='filture_filture_f1'>
              Filture 7
            </div>
            </div>
            <div className='filture_filture_f1'>
              FILTURE FOOTER
            </div>
          </div>
          <div className='filture_main'>
            {
                myslides
            }
            {/* <div className='ProductContainer'>
                ProductContainer
            </div> */}
           </div>
      </div>
  )
}


  

export default StoreFilture