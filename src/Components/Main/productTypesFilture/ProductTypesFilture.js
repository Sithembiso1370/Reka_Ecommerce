import React from 'react'
import slides from './slides'
import './productTypesFilture.css'
import { Link } from "react-router-dom";
import { getProducts } from './ProductsData'




function ProductTypesFilture(props) {
  // let productsData = getProducts();
    

    const myproducts =  props.productsData.map((product) =>
        <div className='Product' 
        style={{
          backgroundImage: `url(${product.img})`
        }}
        >
          <ul className="ProductDetails_top">
            <li className="productOwner"
                    style={{
                      background: `url(${product.p_logo})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                      
                    }}
            ></li>
            <li>{product.country}</li>
          </ul>
          <Link
            className='ProductImage'
            to={`/Store/ProductPage/${product.id}`}
            key={product.country}
          >$ 34.87</Link>
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
    <div className="ProductTypesFilture">
      <div className="ProductFiltureTopSelect">
        <ul>
          <li>Filtures left</li>
          <li>{props.department}</li>
          <li>Filtures Right</li>
        </ul>
      </div>
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
                <div className='filture_filture_f1'>
                  Filture 8
                </div>
                <div className='filture_filture_f1'>
                  Filture 9
                </div>
                <div className='filture_filture_f1'>
                  Filture 3
                </div>
                <div className='filture_filture_f1'>
                  Filture 10
                </div>
                <div className='filture_filture_f1'>
                  Filture11
                </div>
                <div className='filture_filture_f1'>
                  Filture12
                </div>
                <div className='filture_filture_f1'>
                  Filture 13
                </div>
                <div className='filture_filture_f8'
              
                >
                    <div className="filture_add1">
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
    </div>


  )
}

export default ProductTypesFilture